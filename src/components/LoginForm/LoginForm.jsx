import React from 'react';
import { Formik } from 'formik';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };
 const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
     .min(6, 'Password is too short, at least 6!')
     .max(12, 'Password is too long, at maximum 12!')
     .required('Required'),
 });
  return (
    <Formik initialValues={{ email: '', password: '' }}   validationSchema={LoginSchema} onSubmit={handelSubmit}>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
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
           {errors.email && touched.email ? (  <div>{errors.email}</div>) : null}
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
               {errors.password && touched.password ? (  <div>{errors.password}</div>) : null}
          <button type="submit">Log In</button>
           <Link to="/register">Register</Link>
        </form>
      )}
    </Formik>
  );
};
