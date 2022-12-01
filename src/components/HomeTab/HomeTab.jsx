import Table from 'components/Table/Table';
import { Balance } from 'components/Balance/Balance';
import { Mobile } from 'components/Container/Mobile';

const HomeTab = () => {
  return (
    <>
      <Mobile>
        <Balance />
      </Mobile>
      <Table />
    </>
  );
};

export default HomeTab;
