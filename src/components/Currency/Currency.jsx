import { useEffect, useState } from 'react'; //
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { fetchCurrency } from 'redux/currency/operations';
import { selectCurrency, selectIsLoading } from 'redux/currency/selectors';
import {
  Box,
  Table,
  Thead,
  Th,
  Tbody,
  LoadBox,
  Tr,
  Td,
  TableIcon,
  MoreInfo,
} from './Currency.styled';
import { CurrencyAllRate } from 'components/CurrencyAllRate/CurrencyAllRate';
import { diagram, diagramTab, diagramMob } from 'assets/media/icons';
import { Tablet } from 'components/Container/Tablet';
import { Desktop } from 'components/Container/Desktop';
import { Mobile } from 'components/Container/Mobile';

export const Currency = () => {
  const currency = useSelector(selectCurrency);
  const loading = useSelector(selectIsLoading);
  const [moreinfo, setMoreinfo] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  return (
    <Box>
      <Table>
        <Thead>
          <tr>
            <Th>Currency</Th>
            <Th>Purchase</Th>
            <Th>Sale</Th>
          </tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <td colSpan="3">
                <LoadBox>
                  <RotatingLines
                    strokeColor="var(--white)"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="35"
                    visible={true}
                  />
                </LoadBox>
              </td>
            </Tr>
          ) : (
            currency?.length > 0 && (
              <>
                <Tr>
                  <Td>USD</Td>
                  <Td>{currency[0].rateBuy.toFixed(2)}</Td>
                  <Td>{currency[0].rateSell.toFixed(2)}</Td>
                </Tr>
                <Tr>
                  <Td>EUR</Td>
                  <Td>{currency[1].rateBuy.toFixed(2)}</Td>
                  <Td>{currency[1].rateSell.toFixed(2)}</Td>
                </Tr>
                <Tr>
                  <Td>EUR/USD</Td>
                  <Td>{currency[2].rateBuy.toFixed(2)}</Td>
                  <Td>{currency[2].rateSell.toFixed(2)}</Td>
                </Tr>
              </>
            )
          )}
        </Tbody>
      </Table>
      <MoreInfo type="button" onClick={() => setMoreinfo(true)}>
        more info
      </MoreInfo>
      {moreinfo && <CurrencyAllRate closeFunck={setMoreinfo} />}

      <Mobile>
        <TableIcon src={diagramMob} width={280} height={93} />
      </Mobile>
      <Tablet>
        <TableIcon src={diagramTab} width={336} height={119} />
      </Tablet>
      <Desktop>
        <TableIcon src={diagram} width={393} height={134} />
      </Desktop>
    </Box>
  );
};
