import { useSelector } from 'react-redux';

import { selectCurrency } from 'redux/currency/selectors';
import {
  Box,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Caption,
  Btn,
  About,
  Wrap,
} from './CurrencyAllRate.styled';
import { data } from '../../assets/data/data.js';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export const CurrencyAllRate = ({ closeFunck }) => {
  const currency = useSelector(selectCurrency);
  const [filter, setFilter] = useState(['', '', '']);

  let filteredCurreccy = [...currency];
  if (filter[0] !== '') {
    filteredCurreccy = currency.filter(el =>
      String(el.currencyCodeA).includes(filter[0])
    );
  }
  if (filter[1] !== '') {
    filteredCurreccy = currency.filter(el =>
      String(data[el.currencyCodeA][0]).includes(filter[1].toUpperCase())
    );
  }
  if (filter[2] !== '') {
    filteredCurreccy = currency.filter(el =>
      String(data[el.currencyCodeA][1])
        .toUpperCase()
        .includes(filter[2].toUpperCase())
    );
  }
  return createPortal(
    <Wrap>
      <Box>
        <Caption>start typing</Caption>
        <Btn onClick={() => closeFunck(false)} type="button">
          x
        </Btn>
        <Table>
          <Thead>
            <tr>
              <Th width={32}>
                <input
                  name="number"
                  onChange={e => setFilter([e.currentTarget.value, '', ''])}
                  value={filter[0]}
                  type="text"
                  style={{ width: '100%' }}
                  onDoubleClick={() => setFilter(['', '', ''])}
                  title="delete by double click"
                />
              </Th>
              <Th width={36}>
                <input
                  name="alfa"
                  onChange={e => setFilter(['', e.currentTarget.value, ''])}
                  value={filter[1]}
                  type="text"
                  style={{ width: '100%' }}
                  onDoubleClick={() => setFilter(['', '', ''])}
                  title="delete by double click"
                />
              </Th>
              <Th width={112}>
                <input
                  name="name"
                  onChange={e => setFilter(['', '', e.currentTarget.value])}
                  value={filter[2]}
                  type="text"
                  style={{ width: '100%' }}
                  onDoubleClick={() => setFilter(['', '', ''])}
                  title="delete by double click"
                />
              </Th>
              <Th>Buy</Th>
              <Th>Sale</Th>
            </tr>
          </Thead>
          <Tbody>
            {filteredCurreccy.map((el, i) => {
              if (el.currencyCodeB === 980) {
                return (
                  <Tr key={i}>
                    <Td
                      width={32}
                      onClick={e =>
                        setFilter([e.currentTarget.textContent, '', ''])
                      }
                    >
                      {el.currencyCodeA}
                    </Td>
                    <Td
                      width={36}
                      onClick={e =>
                        setFilter(['', e.currentTarget.textContent, ''])
                      }
                    >
                      {data[el.currencyCodeA][0]}
                    </Td>
                    <Td width={112}>
                      <span
                        onClick={e =>
                          setFilter(['', '', e.currentTarget.textContent])
                        }
                      >
                        {data[el.currencyCodeA][1]}
                      </span>{' '}
                      {'  '}
                      <About
                        href={`https://uk.wikipedia.org/wiki/${
                          data[el.currencyCodeA][1]
                        }`}
                        target="_blank"
                      >
                        ?
                      </About>
                    </Td>
                    <Td width={50} style={{ textAlign: 'right' }}>
                      {el?.rateBuy ? el.rateBuy.toFixed(2) : '-'}
                    </Td>
                    <Td width={50} style={{ textAlign: 'right' }}>
                      {el?.rateSell
                        ? el.rateSell.toFixed(2)
                        : el.rateCross.toFixed(2)}
                    </Td>
                  </Tr>
                );
              } else {
                return null;
              }
            })}
          </Tbody>
        </Table>
      </Box>
    </Wrap>,
    document.querySelector('#portal')
  );
};
