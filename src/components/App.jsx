import { useMobile } from 'hooks/useMobile';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refreshUser } from 'redux/auth/auth-operations';
import { Currency } from './Currency/Currency';
import { RestrictedRoute } from './RestrictedRoute';

const HomeTab = lazy(() => import('components/HomeTab/HomeTab'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const DiagramTab = lazy(() => import('components/DiagramTab/DiagramTab'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));

export const App = () => {
  const isMobile = useMobile();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="login"
        element={<RestrictedRoute redirectTo="/home" component={<Login />} />}
      />
      <Route
        path="registration"
        element={
          <RestrictedRoute redirectTo="/home" component={<Registration />} />
        }
      />
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<HomeTab />} />
        <Route path="diagram" element={<DiagramTab />} />
        {isMobile && <Route path="currency" element={<Currency />} />}
        <Route path="" element={<Navigate to="/home" />} />
      </Route>

      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
