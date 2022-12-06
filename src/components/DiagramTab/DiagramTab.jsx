import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  Box,
  Category,
  HeaderText,
  Statistic,
  StyledForm,
  StyledSelect,
  TableHeader,
  Total,
  Balance,
  StyledVscChevronDown,
  WrapperYear,
  WrapperMmonth,
  Title,
  Table,
  Diagram,
  Data,
} from './DiagramTab.styled';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DiagramTabMoreInfor } from 'components/DiagramTabMoreInfor/DiagramTabMoreInfor';
import { Loader } from 'components/Loader/Loader';
import { Mobile } from 'components/Container/Mobile';
import { IsDesktopOrTablet } from 'components/Container/Tablet';

ChartJS.register(ArcElement, Tooltip);

const colors = [
  '#fed057',
  '#FFD8D0',
  '#FF6596',
  '#C5BAFF',
  '#6E78E8',
  '#81E1FF',
  '#00AD84',
  '#4A56E2',
  '#FD9498',
  '#A6A6A6',
];

const DiagramTab = () => {
  const [summary, setSummary] = useState(null);
  const [categories, setCategories] = useState(null);
  const [showinfo, setShowinfo] = useState({
    showinfo: false,
    caption: '',
    data: [],
  });
  const yearNode = useRef();
  const monthNode = useRef();
  const transactions = useSelector(state => state.finance.transactions);
  const years = new Set(transactions.map(el => el.transactionDate.slice(0, 4)));
  const monthes = new Set(
    transactions.map(el => el.transactionDate.slice(5, 7))
  );

  const length = summary?.categoriesSummary.filter(el => el.total < 0).length;

  const data = {
    labels: summary?.categoriesSummary
      .filter(el => el.total < 0)
      .map(({ name }) => name),
    datasets: [
      {
        label: 'expense',
        data: summary?.categoriesSummary
          .filter(el => el.total < 0)
          .map(({ total }) => -total),
        backgroundColor: colors.slice(0, length),
        borderColor: colors.slice(0, length),
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    async function getDataForState() {
      try {
        const summary = await axios.get('/api/transactions-summary');
        const categories = await axios.get('/api/transaction-categories');
        return { summary: summary.data, categories: categories.data };
      } catch (error) {
        console.log(error);
      }
    }
    getDataForState().then(({ summary, categories }) => {
      setSummary(summary);
      setCategories(categories);
    });
  }, []);

  //  i.categoryId = categories.find(el => el.name === i.name).id;

  //DiagramTab.forceUpdate();

  async function handler(e) {
    e.preventDefault();
    if (yearNode.current.value === '' && monthNode.current.value !== '') {
      return;
    }
    if (yearNode.current.value === '' && monthNode.current.value === '') {
      try {
        const res = await axios.get(`/api/transactions-summary`);
        setSummary(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (yearNode.current.value !== '' && monthNode.current.value === '') {
      try {
        const res = await axios.get(
          `/api/transactions-summary?year=${yearNode.current.value}`
        );
        setSummary(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (yearNode.current.value !== '' && monthNode.current.value !== '') {
      try {
        const res = await axios.get(
          `/api/transactions-summary?month=${monthNode.current.value}&year=${yearNode.current.value}`
        );
        setSummary(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  function categorySort(e) {
    const node = e.currentTarget;

    if (node.dataset.sort === '=' || node.dataset.sort === 'd') {
      node.dataset.sort = 'i';
      setSummary(state => ({
        ...state,
        categoriesSummary: [
          ...state.categoriesSummary.sort((a, b) => (a.name > b.name ? 1 : -1)),
        ],
      }));
    } else if (node.dataset.sort === 'i') {
      node.dataset.sort = 'd';
      setSummary(state => ({
        ...state,
        categoriesSummary: [
          ...state.categoriesSummary.sort((a, b) => (a.name < b.name ? 1 : -1)),
        ],
      }));
    }
  }
  function sumSort(e) {
    const node = e.currentTarget;

    if (node.dataset.sort === '=' || node.dataset.sort === 'd') {
      node.dataset.sort = 'i';
      setSummary(state => ({
        ...state,
        categoriesSummary: [
          ...state.categoriesSummary.sort((a, b) =>
            -a.total > -b.total ? 1 : -1
          ),
        ],
      }));
    } else if (node.dataset.sort === 'i') {
      node.dataset.sort = 'd';
      setSummary(state => ({
        ...state,
        categoriesSummary: [
          ...state.categoriesSummary.sort((a, b) =>
            -a.total < -b.total ? 1 : -1
          ),
        ],
      }));
    }
  }
  function getMoreInfo(e) {
    const categoryName = e.currentTarget.dataset.name;
    const categoryId = categories.find(el => el.name === categoryName).id;
    let transactionByExpenses = transactions.filter(
      el => el.categoryId === categoryId
    );
    let caption = 'Exspenses by category ' + categoryName;

    if (yearNode.current.value !== '') {
      transactionByExpenses = transactionByExpenses.filter(
        el => el.transactionDate.slice(0, 4) === yearNode.current.value
      );
      caption = caption + ' for a period: year ' + yearNode.current.value;
    }
    if (yearNode.current.value !== '' && monthNode.current.value !== '') {
      transactionByExpenses = transactionByExpenses.filter(
        el => el.transactionDate.slice(5, 7) === monthNode.current.value
      );
      caption = caption + ' month ' + monthNode.current.value;
    }
    setShowinfo({
      showinfo: true,
      caption: caption,
      data: transactionByExpenses,
    });
  }

  return (
    <Box>
      {!summary ? (
        <Loader />
      ) : (
        <>
          <IsDesktopOrTablet>
            <Title>Statistic</Title>
          </IsDesktopOrTablet>
          <Statistic>
            <Diagram>
              <Mobile>
                <Title>Statistic</Title>
              </Mobile>
              <Balance>₴ {summary.periodTotal}</Balance>
              <Doughnut
                options={{ cutout: '70%', animation: { animateScale: true } }}
                data={data}
              />
            </Diagram>
            <Table>
              <StyledForm onSubmit={handler}>
                <WrapperYear>
                  <StyledSelect name="year" ref={yearNode} onChange={handler}>
                    <option value="">Year</option>
                    {Array.from(years).map(el => (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    ))}
                  </StyledSelect>
                  <StyledVscChevronDown />
                </WrapperYear>

                <WrapperMmonth>
                  <StyledSelect name="month" ref={monthNode} onChange={handler}>
                    <option value="">Month</option>
                    {Array.from(monthes).map(el => (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    ))}
                  </StyledSelect>
                  <StyledVscChevronDown />
                </WrapperMmonth>
              </StyledForm>

              <TableHeader>
                <HeaderText
                  data-sort="="
                  onClick={categorySort}
                  title="click to sort"
                >
                  Category
                </HeaderText>
                <HeaderText
                  data-sort="="
                  onClick={sumSort}
                  title="click to sort"
                >
                  Sum
                </HeaderText>
              </TableHeader>

              <Data>
                {summary.categoriesSummary
                  .filter(el => el.total < 0)
                  .map(({ name, total }, i) => (
                    <Category
                      key={name}
                      col={colors[i]}
                      onClick={getMoreInfo}
                      data-name={name}
                      title="click for detailed information"
                    >
                      <div>{name}</div> <div>{-total}</div>
                    </Category>
                  ))}
              </Data>
              <Total>
                <div style={{ fontWeight: 700 }}>Expenses:</div>
                <div style={{ fontWeight: 700, color: '#FF6596' }}>
                  {-summary.expenseSummary}
                </div>
              </Total>
              <Total>
                <div style={{ fontWeight: 700 }}>Income:</div>
                <div style={{ fontWeight: 700, color: '#24CCA7' }}>
                  {summary.incomeSummary}
                </div>
              </Total>
            </Table>
            <ToastContainer />
            {showinfo.showinfo && (
              <DiagramTabMoreInfor
                showinfo={showinfo}
                setShowinfo={setShowinfo}
              />
            )}
          </Statistic>
        </>
      )}
    </Box>
  );
};

export default DiagramTab;
