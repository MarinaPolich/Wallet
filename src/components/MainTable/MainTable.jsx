import React from 'react';
import { transactionsTemplate } from '../../dataTremplate/transactions';
import {
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  THead,
  THeadRow,
  TSum,
} from './MainTable.styled';

import moment from 'moment';
moment().format();

export default function MainTable() {
  return (
    <section>
      MainTable
      <StyledTable>
        <THead>
          <THeadRow>
            <StyledTh position={'left'}>Date</StyledTh>
            <StyledTh>Type</StyledTh>
            <StyledTh>Category</StyledTh>
            <StyledTh position={'left'}>Comment</StyledTh>
            <StyledTh>Sum</StyledTh>
            <StyledTh>Balance</StyledTh>
          </THeadRow>
        </THead>
        {transactionsTemplate.map(item => (
          <StyledTr>
            <StyledTd position={'left'}>
              {moment(item.transactionDate).format('DD.MM.YY')}
            </StyledTd>
            <StyledTd position={'center'}>
              {item.type === 'INCOME' ? '+' : '-'}
            </StyledTd>
            <StyledTd>{item.categoryId}</StyledTd>
            <StyledTd position={'left'}>{item.comment}</StyledTd>
            <TSum income={item.type === 'INCOME'} position={'right'}>
              {item.amount}
            </TSum>
            <StyledTd position={'right'}>{item.balanceAfter}</StyledTd>
          </StyledTr>
        ))}
      </StyledTable>
    </section>
  );
}
