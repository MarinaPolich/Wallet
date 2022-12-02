import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selector';
import { Loader } from './Loader/Loader';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<Loader />}>{component}</Suspense>
  );
};
