import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <ButtonAddTransaction />
    </div>
  );
};

export default Dashboard;
