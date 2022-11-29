import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initreg = { email: '', pw: '' };
  const [reg, setReg] = useState(initreg);

  const changeLogIn = event => {
    const fromAttName = event.target.name;
    setReg({ ...reg, [fromAttName]: event.target.value });
  };

  const handleSubmiLogIn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.pw.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmiLogIn}>
        Log in
        <label>
          Email
          <input
            type="email"
            name="email"
            value={reg.email}
            required
            onChange={changeLogIn}
          />
        </label>
        <label>
          Password
          <input
            type="tel"
            name="pw"
            value={reg.pw}
            required
            onChange={changeLogIn}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
