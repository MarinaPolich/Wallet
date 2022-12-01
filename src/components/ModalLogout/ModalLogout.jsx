import { logOut } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
export const ModalLogout = ({setLogOut}) => {
  const dispatch = useDispatch();
  return (<div>ModalLogout
    <button onClick={() => { dispatch(logOut()); setLogOut(false); }}>Log Out</button>
    <button type='button' onClick={() =>setLogOut(false)}>  No</button>
  </div>);
};
