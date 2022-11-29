import React from 'react';
import { Formik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handelSubmit}>
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Log In</button>
          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  );
};
