import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill, BsPencilSquare} from "react-icons/bs";

import {
  StyledDelButton,
  StyledSpan,
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
  
  deleteTransactionThunk,
  getAllTransactionsThunk,
} from 'redux/finance/finance-operations';
import { useEffect } from 'react';
import { categoriesSelector, transactionsSelector } from 'redux/selectors';
import { sortByDate } from 'assets/helpers/sorters';
import { EditTransactionModal } from 'components/EditTransactionModal/EditTransactionModal';

export default function Table() {



  const [editTransactionId, setEditTransactionId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (itemId) => {
    setEditTransactionId(itemId)
    setIsModalOpen(true);
  }

  const transactions = useSelector(transactionsSelector);
  const sortedTransactions = [...transactions].sort(sortByDate)

  const categories = useSelector(categoriesSelector);

  

  const searchCategoryName = id => {
    const category = categories.find(item => id === item.id);
    console.log('category', category)
    return category?.name;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);

  const deleteTransaction = (itemId) => {
    dispatch(deleteTransactionThunk(itemId))
  }


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
          {sortedTransactions.map(item => (
            <tr key={item.id}>
              <StyledTd position={'left'}>
                {moment(item.transactionDate).format('DD.MM.YY')}
              </StyledTd>
              <TypeTd>{item.type === 'INCOME' ? '+' : '-'}</TypeTd>
              <StyledTd>{searchCategoryName(item.categoryId)}</StyledTd>
              <StyledTd>{item.comment}</StyledTd>
              <TSum income={item.type === 'INCOME'} position={'right'}>
                {item.amount.toFixed(2)}
              </TSum>
              <BalanceTd position={'right'}><StyledSpan>{item.balanceAfter.toFixed(2)} <StyledDelButton type="button" onClick={()=> deleteTransaction(item.id)}><BsFillTrashFill color="#FF6596"/></StyledDelButton><StyledDelButton onClick={()=> openModal(item.id)}><BsPencilSquare color="#24CCA7"/></StyledDelButton></StyledSpan></BalanceTd>

            </tr>
          ))}
        </Tbody>
      </StyledTable>

      { isModalOpen && <EditTransactionModal closeModal={closeModal} transactionData={transactions.find(item=>  item.id === editTransactionId)}  />}
    </Section>
  );
}
