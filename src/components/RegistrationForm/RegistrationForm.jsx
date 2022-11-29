import React from 'react';
import { Formik } from 'formik';
import { registration } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handelSubmit = ({ email, password, confirm, name }, { resetForm }) => {
    dispatch(registration({ email, password, confirm, name }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirm: '', name: '' }}
      onSubmit={handelSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
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
          <label>
            {' '}
            <input
              type="confirm"
              name="confirm"
              value={values.confirm}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </label>
          <label>
            {' '}
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="First name "
            />
          </label>
          <button type="submit">Register</button>
          <button type="submit">Log In</button>
        </form>
      )}
    </Formik>
  );
};

//const BasicExample = () => (
//  <div>
//    <h1>My Form</h1>
//    <Formik
//      initialValues={{ name: 'jared' }}
//      onSubmit={(values, actions) => {
//        setTimeout(() => {
//          alert(JSON.stringify(values, null, 2));
//          actions.setSubmitting(false);
//        }, 1000);
//      }}
//    >
//      {props => (
//        <form onSubmit={props.handleSubmit}>
//          <input
//            type="text"
//            onChange={props.handleChange}
//            onBlur={props.handleBlur}
//            value={props.values.name}
//            name="name"
//          />
//          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
//          <button type="submit">Submit</button>
//        </form>
//      )}
//    </Formik>
//  </div>
//);
