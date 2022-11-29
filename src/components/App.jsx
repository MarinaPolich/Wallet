import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const HomeTab = lazy(() => import('components/HomeTab/HomeTab'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const DiagramTab = lazy(() => import('components/DiagramTab/DiagramTab'));
const Dashboard = lazy(() => import('pages/Dashboard/Dashboard'));

export const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<HomeTab />} />
        <Route path="diagram" element={<DiagramTab />} />
        <Route path="" element={<Navigate to="home" />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
