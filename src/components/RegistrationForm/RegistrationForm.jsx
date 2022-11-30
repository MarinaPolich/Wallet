import React from 'react';
import { Formik } from 'formik';
import { registration } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password, username }, { resetForm }) => {
    dispatch(registration({ email, password, username }));
    resetForm();
  };
  const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email().required('*Required'),
   password: Yup.string()
     .min(6, 'Password is too short, at least 6!')
     .max(12, 'Password is too long, at maximum 12!')
     .required('Required'),
   username: Yup.string().required('Required')
     .min(1, 'Too Short!')
      .max(12, 'Too Long!'),
    confirm: Yup.string()
            .required('*Required')
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
      {({ handleSubmit, handleChange, values, errors, touched  }) => (
        <form onSubmit={handleSubmit}>
          {' '}
          <label>
            {' '}
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="E-mail"
            />{' '}
          </label>
             {errors.email && touched.email ? (  <div>{errors.email}</div>) : null}
          <label>
            {' '}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>
             {errors.password && touched.password ? (  <div>{errors.password}</div>) : null}
          <label>
            {' '}
            <input
              type="password"
              name="confirm"
              value={values.confirm}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </label>
             {errors.confirm && touched.confirm ? (  <div>{errors.confirm}</div>) : null}
          <label>
            {' '}
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="First name "
            />
          </label>
             {errors.username && touched.username ? (  <div>{errors.username}</div>) : null}
          <button type="submit">Register</button>
          <Link to="/login">Log In</Link>
        </form>
      )}
    </Formik>
  );
};