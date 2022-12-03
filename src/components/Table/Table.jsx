import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill, BsPencilSquare} from "react-icons/bs";

import {
  StyledDelButton,
  StyledSpan,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  THead,
  THeadRow,
  TSum,
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

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
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
    <section>
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
          {sortedTransactions.map(item => (
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
              <StyledTd position={'right'}><StyledSpan>{item.balanceAfter} <StyledDelButton type="button" onClick={()=> deleteTransaction(item.id)}><BsFillTrashFill color="#FF6596"/></StyledDelButton><StyledDelButton onClick={()=> openModal(item.id)}><BsPencilSquare color="#24CCA7"/></StyledDelButton></StyledSpan></StyledTd>

            </StyledTr>
          ))}
        </tbody>
      </StyledTable>

      { isModalOpen && <EditTransactionModal transactionData={transactions.find(item=>  item.id === editTransactionId)} closeModal={toggleModal} />}
    </section>
  );
}
