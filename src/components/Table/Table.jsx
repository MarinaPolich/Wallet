import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { Mobile } from 'components/Container/Mobile';
import { IsDesktopOrTablet } from 'components/Container/Tablet';
import {
  StyledDelButton,
  StyledSpan,
  Section,
  StyledTable,
  StyledTd,
  CommentTh,
  StyledTh,
  ThRight,
  THead,
  Tbody,
  TypeTd,
  CommentTd,
  TSum,
  BalanceTd,
  List,
  ListItem,
  ListText,
  ListSum,
  ActionContainer,
  Btn,
  TR,
  ListItemBtn,
  StyledInput,
} from './Table.styled';

import moment from 'moment';
import {
  deleteTransactionThunk,
  getAllTransactionsThunk,
} from 'redux/finance/finance-operations';
import { useEffect } from 'react';
import { categoriesSelector, transactionsSelector } from 'redux/selectors';
// import { sortByDate } from 'helpers/sorters';

import { EditTransactionModal } from 'components/EditTransactionModal/EditTransactionModal';

export default function Table() {
  const [editTransactionId, setEditTransactionId] = useState('');
  const [filter, setfilter] = useState({ categoryName: '', comment: '' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = itemId => {
    setEditTransactionId(itemId);
    setIsModalOpen(true);
  };
  const categories = useSelector(categoriesSelector);
  const searchCategoryName = id => {
    const category = categories.find(item => id === item.id);
    return category?.name;
  };
  const transactions = useSelector(transactionsSelector);
  const transactionsWithCategory = [...transactions].map(el => {
    return { ...el, categoryName: searchCategoryName(el.categoryId) };
  });
  let sortedTransactions = [...transactionsWithCategory].reverse(); //.sort(sortByDate);
  for (let [key, value] of Object.entries(filter)) {
    if (value === '') continue;
    sortedTransactions = [...sortedTransactions].filter(el =>
      el[key].toLowerCase().includes(value.toLowerCase())
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, [dispatch]);

  const deleteTransaction = itemId => {
    dispatch(deleteTransactionThunk(itemId));
  };
  const hendelerFilterCategory = e => {
    setfilter(st => ({
      ...st,
      categoryName: e.target.value,
    }));
  };
  const hendelerFilterComment = e => {
    setfilter(st => ({
      ...st,
      comment: e.target.value,
    }));
  };

  return (
    <Section>
      <IsDesktopOrTablet>
        <StyledTable>
          <THead>
            <tr>
              <StyledTh>Date</StyledTh>
              <StyledTh>Type</StyledTh>

              <StyledTh>
                <StyledInput
                  type="text"
                  placeholder="Category"
                  value={filter.categoryName}
                  onChange={hendelerFilterCategory}
                />
                {filter.categoryName && (
                  <ActionContainer>
                    <Btn
                      onClick={() =>
                        setfilter(st => ({ ...st, categoryName: '' }))
                      }
                    >
                      <BsFillTrashFill size={16} color="#a6a6a6" />
                    </Btn>
                  </ActionContainer>
                )}
              </StyledTh>
              <CommentTh>
                <StyledInput
                  type="text"
                  placeholder="Comment"
                  value={filter.comment}
                  onChange={hendelerFilterComment}
                />
                {filter.comment && (
                  <ActionContainer>
                    <Btn
                      onClick={() => setfilter(st => ({ ...st, comment: '' }))}
                    >
                      <BsFillTrashFill size={16} color="#a6a6a6" />
                    </Btn>
                  </ActionContainer>
                )}
              </CommentTh>

              <ThRight>Sum</ThRight>
              <ThRight>Balance</ThRight>
            </tr>
          </THead>
          <Tbody>
            {sortedTransactions.map(item => (
              <TR key={item.id}>
                <StyledTd>
                  {moment(item.transactionDate).format('DD.MM.YY')}
                </StyledTd>
                <TypeTd>{item.type === 'INCOME' ? '+' : '-'}</TypeTd>

                <StyledTd>{searchCategoryName(item.categoryId)}</StyledTd>
                <CommentTd>{item.comment}</CommentTd>

                <TSum income={item.type === 'INCOME'}>
                  {item.amount.toFixed(2)}
                </TSum>
                <BalanceTd>
                  <StyledSpan>{item.balanceAfter.toFixed(2)} </StyledSpan>
                  <ActionContainer>
                    <StyledDelButton onClick={() => openModal(item.id)}>
                      <BsPencilSquare size={30} color="#a6a6a6" />
                    </StyledDelButton>
                    <StyledDelButton
                      type="button"
                      onClick={() => deleteTransaction(item.id)}
                    >
                      <BsFillTrashFill size={30} color="#a6a6a6" />
                    </StyledDelButton>
                  </ActionContainer>
                </BalanceTd>
              </TR>
            ))}
          </Tbody>
        </StyledTable>
      </IsDesktopOrTablet>
      <Mobile>
        <div
          style={{ marginLeft: 'auto', marginRight: 'auto', width: '280px' }}
        >
          <StyledTh style={{ paddingLeft: 0 }}></StyledTh>
          <StyledTh style={{ paddingLeft: 0 }}></StyledTh>
          <StyledTh style={{ padding: '0 5px', width: '140px' }}>
            <StyledInput
              type="text"
              placeholder="Category"
              value={filter.categoryName}
              onChange={hendelerFilterCategory}
            />
            {filter.categoryName && (
              <ActionContainer>
                <Btn
                  onClick={() => setfilter(st => ({ ...st, categoryName: '' }))}
                >
                  <BsFillTrashFill size={16} color="#a6a6a6" />
                </Btn>
              </ActionContainer>
            )}
          </StyledTh>
          <StyledTh style={{ padding: '0 5px', width: '140px' }}>
            <StyledInput
              type="text"
              placeholder="Comment"
              value={filter.comment}
              onChange={hendelerFilterComment}
            />
            {filter.comment && (
              <ActionContainer>
                <Btn onClick={() => setfilter(st => ({ ...st, comment: '' }))}>
                  <BsFillTrashFill size={16} color="#a6a6a6" />
                </Btn>
              </ActionContainer>
            )}
          </StyledTh>
        </div>
        {sortedTransactions.map(item => (
          <List key={item.id} income={item.type === 'INCOME'}>
            <ListItem>
              Date
              <ListText>
                {moment(item.transactionDate).format('DD.MM.YY')}
              </ListText>
            </ListItem>
            <ListItem>
              Type <ListText>{item.type === 'INCOME' ? '+' : '-'}</ListText>
            </ListItem>
            <ListItem>
              Category{' '}
              <ListText>{searchCategoryName(item.categoryId)}</ListText>
            </ListItem>
            <ListItem>
              Comment <ListText>{item.comment}</ListText>
            </ListItem>
            <ListItem>
              Sum{' '}
              <ListSum income={item.type === 'INCOME'}>
                {item.amount.toFixed(2)}
              </ListSum>
            </ListItem>
            <ListItem>
              Balance <ListText>{item.balanceAfter.toFixed(2)}</ListText>
            </ListItem>
            <ListItemBtn>
              <StyledDelButton onClick={() => openModal(item.id)}>
                <BsPencilSquare size={30} color="#a6a6a6" />
              </StyledDelButton>
              <StyledDelButton
                type="button"
                onClick={() => deleteTransaction(item.id)}
              >
                <BsFillTrashFill size={30} color="#a6a6a6" />
              </StyledDelButton>
            </ListItemBtn>
          </List>
        ))}
      </Mobile>

      {isModalOpen && (
        <EditTransactionModal
          closeModal={closeModal}
          transactionData={transactions.find(
            item => item.id === editTransactionId
          )}
        />
      )}
    </Section>
  );
}
