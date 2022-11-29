import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { ButtonAddTransactions } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { Container } from './Dashboard.styled';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <ButtonAddTransactions />
    </Container>
  );
};

export default Dashboard;
