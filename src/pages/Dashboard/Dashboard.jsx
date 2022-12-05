import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategoriesThunk } from 'redux/categories/categories-operations';
import { IsDesktopOrTablet } from 'components/Container/Tablet';
import { Box, AppBarBox, NavBox } from './Dashboard.styled';
import { Container } from './Dashboard.styled';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  return (
    <Container>
      <Header name="Name" />
      <Box>
        <AppBarBox>
          <NavBox>
            <Navigation />
            <IsDesktopOrTablet>
              <Balance />
            </IsDesktopOrTablet>
          </NavBox>
          <IsDesktopOrTablet>
            <Currency />
          </IsDesktopOrTablet>
        </AppBarBox>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </Box>
    </Container>
  )
};

export default Dashboard;
