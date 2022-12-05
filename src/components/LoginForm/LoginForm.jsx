import React, {useState} from 'react';
import { Formik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logo, email, lock, eyeClose, eye } from 'assets/media/icons';
import {
  Form,
  Input,
  Label,
  Container,
  Title,
  Svg,
  Button,
  StyledLink,
  LogoSvg,
  TextError,
} from './LoginForm.styled.js';

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string()
      .min(6, 'Password is too short, at least 6!')
      .max(12, 'Password is too long, at maximum 12!')
      .required('Enter passworg'),
  });

export const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    //resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handelSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Container>
          <Title>
            <LogoSvg src={logo} width={30} height={30} title="Logo" />
            Wallet
          </Title>
          <Form onSubmit={handleSubmit}>
            <Label>
              <Svg src={email} width={30} height={28} title="Email" />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </Label>

            <Label>
              <Svg src={lock} width={30} height={28} title="Lock" />
              <Input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <Svg  src={passwordShown ? eye : eyeClose} width={30} height={28} title="Eye" onClick={() => setPasswordShown(!passwordShown)}/>
              {errors.password && touched.password ? (
                <TextError>{errors.password}</TextError>
              ) : null}
            </Label>

            <Button type="submit">Log In</Button>
            <StyledLink to="/registration">Register</StyledLink>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
