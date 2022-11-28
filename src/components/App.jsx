import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const Diagram = lazy(() => import('pages/Diagram'));

export const App = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="diagram" element={<Diagram />} />
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
