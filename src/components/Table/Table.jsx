import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Section,
  StyledTable,
  StyledTd,
  StyledTh,
  ThRight,
  THead,
  Tbody,
  TypeTd,
  TSum,
  BalanceTd,
} from './Table.styled';

import moment from 'moment';
import {
  addTransactionThunk,
  getAllTransactionsThunk,
} from 'redux/finance/finance-operations';
import { useEffect } from 'react';
import { categoriesSelector, transactionsSelector } from 'redux/selectors';

export default function Table() {
  const transactions = useSelector(transactionsSelector);
  const categories = useSelector(categoriesSelector);
  const reversed = arr => arr.map((_, index) => arr[arr.length - 1 - index]);

  const searchCategoryName = id => {
    const category = categories.find(item => id === item.id);
    return category?.name;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);

  const addTransaction = () => {
    dispatch(
      addTransactionThunk({
        transactionDate: '2022-11-02',
        type: 'INCOME',
        categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
        comment: 'salary',
        amount: 10500,
      })
    );
  };
  return (
    <Section>
      <StyledTable>
        <THead>
          <tr>
            <StyledTh>Date</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Category</StyledTh>
            <StyledTh>Comment</StyledTh>
            <ThRight>Sum</ThRight>
            <ThRight>Balance</ThRight>
          </tr>
        </THead>
        <Tbody>
          {reversed(transactions).map(item => (
            <tr key={item.id}>
              <StyledTd>
                {moment(item.transactionDate).format('DD.MM.YY')}
              </StyledTd>
              <TypeTd>{item.type === 'INCOME' ? '+' : '-'}</TypeTd>
              <StyledTd>{searchCategoryName(item.categoryId)}</StyledTd>
              <StyledTd>{item.comment}</StyledTd>
              <TSum income={item.type === 'INCOME'} position={'right'}>
                {item.amount.toFixed(2)}
              </TSum>
              <BalanceTd>{item.balanceAfter.toFixed(2)}</BalanceTd>
            </tr>
          ))}
        </Tbody>
      </StyledTable>

      <button onClick={addTransaction} type="button">
        +
      </button>
    </Section>
  );
}
