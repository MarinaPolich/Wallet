import Table from 'components/Table/Table';
import { ButtonAddTransactions } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { Balance } from 'components/Balance/Balance';
import { Mobile } from 'components/Container/Mobile';
import { BoxTab } from './HomeTab.styled';

const HomeTab = () => {
  return (
    <BoxTab>
      <Mobile>
        <Balance />
      </Mobile>
      <Table />
      <ButtonAddTransactions />
    </BoxTab>
  );
};

export default HomeTab;
