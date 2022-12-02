import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selector';
import { transactionsSelector } from 'redux/selectors';
import { Box, Title, Amount } from './Balance.styled';

export const Balance = () => {
  const user = useSelector(getUser);
  const transactions = useSelector(transactionsSelector);
  const [balance, setBalance] = useState(user.balance);
  const afterTransactions = transactions[transactions.length - 1]?.balanceAfter;

  useEffect(() => {
    if (afterTransactions) {
      setBalance(afterTransactions);
    }
  }, [afterTransactions]);

  return (
    <Box>
      <Title>Your balance</Title>
      <Amount>&#8372; {balance.toFixed(2)}</Amount>
    </Box>
  );
};
