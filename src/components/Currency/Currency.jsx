import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from 'redux/currency/operations';
import { selectCurrency } from 'redux/currency/selectors';
import { Table, Thead, Th, Tbody, Td } from './Currency.styled';

export const Currency = () => {
  const currency = useSelector(selectCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <Table>
      <Thead>
        <tr>
          <Th>Currency</Th>
          <Th>Purchase</Th>
          <Th>Sale</Th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <Td>USD</Td>
          <Td>{currency[0].rateBuy.toFixed(2)}</Td>
          <Td>{currency[0].rateSell.toFixed(2)}</Td>
        </tr>
        <tr>
          <Td>EUR</Td>
          <Td>{currency[1].rateBuy.toFixed(2)}</Td>
          <Td>{currency[1].rateSell.toFixed(2)}</Td>
        </tr>
        <tr>
          <Td>RUB</Td>
          <Td>{currency[2].rateBuy.toFixed(2)}</Td>
          <Td>{currency[2].rateSell.toFixed(2)}</Td>
        </tr>
      </Tbody>
    </Table>
  );
};
