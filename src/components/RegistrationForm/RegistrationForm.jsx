import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';




export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initreg = { name: '', email: '', pw: '' };
  const [user, setUser] = useState(initreg);

  const changeData = e => {
    const fromAttName = e.target.name;
    setUser({ ...user, [fromAttName]: e.target.value });
  };

  const registered = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    dispatch(
      register({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.pw.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={registered}>
        Register
        <label>
          Name
          <input
            type="text"
            name="name"
            value={user.name}
            required
            onChange={changeData}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={user.email}
            required
            onChange={changeData}
          />
        </label>
        <label>
          Password
          <input
            type="tel"
            name="pw"
            value={user.pw}
            required
            onChange={changeData}
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    </>
  );
};
