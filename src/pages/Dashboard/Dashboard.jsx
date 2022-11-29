import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import { useDispatch } from 'react-redux';
import { categories, transaction } from 'redux/transaction/operations';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';

const Dashboard = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(categories());
  dispatch(transaction());
}, []);

  return (
    <div>
      <Header />
      <Login /> {/* для проверки функционала */}
      <Registration /> {/* для проверки функционала */}
      <Navigation />
      <Balance />
      <Currency />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <ButtonAddTransaction />
      <ModalAddTransaction/>
    </div>
  );
};

export default Dashboard;
