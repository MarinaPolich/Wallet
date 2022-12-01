import React from 'react';
import { Formik } from 'formik';
import { registration } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
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
} from './RegistrationForm.styled.js';
import { logo, email, lock, account } from 'assets/media/icons';
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password, username }, { resetForm }) => {
    dispatch(registration({ email, password, username }));
    resetForm();
  };
  const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email().required('Enter email'),
    password: Yup.string()
      .min(6, 'Password is too short, at least 6!')
      .max(12, 'Password is too long, at maximum 12!')
      .required('Enter password'),
    username: Yup.string()
      .min(1, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Enter name'),
    confirm: Yup.string()
      .required('Enter password')
      .oneOf(
        [Yup.ref('password'), null],
        'Your passwords are different, try harder!'
      ),
  });
  return (
    <Formik
      initialValues={{ email: '', password: '', confirm: '', username: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={handelSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Container>
          <Title>
            <LogoSvg
              src={logo}
              className="logo-icon"
              width={30}
              height={30}
              title="Logo"
            />{' '}
            Wallet
          </Title>{' '}
          <Form onSubmit={handleSubmit}>
            {' '}
            <Label>
              <Svg src={email} width={30} height={28} title="Email" />
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
              />{' '}
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
            </Label>
            <Label>
              <Svg src={lock} width={30} height={28} title="Lock" />
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <TextError>{errors.password}</TextError>
              ) : null}
            </Label>
            <Label>
              <Svg src={lock} width={30} height={28} title="Lock" />
              <Input
                type="password"
                name="confirm"
                value={values.confirm}
                onChange={handleChange}
                placeholder="Confirm password"
              />
              {errors.confirm && touched.confirm ? (
                <TextError>{errors.confirm}</TextError>
              ) : null}
            </Label>
            <Label>
              <Svg src={account} width={30} height={28} title="Account" />
              <Input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="First name "
              />
              {errors.username && touched.username ? (
                <TextError>{errors.username}</TextError>
              ) : null}
            </Label>
            <Button type="submit">Register</Button>
            <StyledLink to="/login">Log In</StyledLink>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
