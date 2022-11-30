import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

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
import { addTransactionThunk, getAllTransactionsThunk } from 'redux/finance/finance-operations';
import { useEffect } from 'react';
import { categoriesSelector, transactionsSelector } from 'redux/selectors';





export default function MainTable() {

    const transactions = useSelector(transactionsSelector);
   
    const categories = useSelector(categoriesSelector);
    const reversed = arr => arr.map((_, index) => arr[arr.length - 1 - index]);

    const searchCategoryName = (id) => {
       const category = categories.find( item => id === item.id)
       return category?.name;
    }
    const dispatch= useDispatch();
    
    useEffect(()=> {
        dispatch(getAllTransactionsThunk())
        
    },[dispatch])


   

    const addTransaction = () => {
dispatch(addTransactionThunk({
    "transactionDate": "2022-11-02",
    "type": "INCOME",
    "categoryId": "063f1132-ba5d-42b4-951d-44011ca46262",
    "comment": "salary",
    "amount": 10500,
  }))
    } 
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
        <tbody>
        {reversed(transactions).map(item => (
          <StyledTr key={item.id}>
            <StyledTd position={'left'}>
              {moment(item.transactionDate).format('DD.MM.YY')}
            </StyledTd>
            <StyledTd position={'center'}>
              {item.type === 'INCOME' ? '+' : '-'}
            </StyledTd>
            <StyledTd>{searchCategoryName(item.categoryId)}</StyledTd>
            <StyledTd position={'left'}>{item.comment}</StyledTd>
            <TSum income={item.type === 'INCOME'} position={'right'}>
              {item.amount}
            </TSum>
            <StyledTd position={'right'}>{item.balanceAfter}</StyledTd>
          </StyledTr>
          
        ))}
        </tbody>
      </StyledTable>

      <button onClick={addTransaction} type="button">+</button>
    </section>
  );
}
