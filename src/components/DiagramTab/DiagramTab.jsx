import { Chart } from 'components/Chart/Chart';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { StyledForm, StyledSelect } from './DiagramTab.styled';
import { useSelector } from 'react-redux';


const period = [
  {
    id: '8603ab35-46cf-4389-968b-a82351241453',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'Product',
    amount: -50,
    balanceAfter: -50,
    categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '2fe70c59-d124-45fd-9dc8-ad1c02242e94',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'yet product',
    amount: -120,
    balanceAfter: -170,
    categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '91ec47e5-08e8-4f7e-98dc-eb62207544d9',
    transactionDate: '2022-11-28',
    type: 'INCOME',
    comment: 'salary',
    amount: 200,
    balanceAfter: 30,
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '6e47253e-786c-465c-988f-759ae38f6fc5',
    transactionDate: '2022-11-28',
    type: 'INCOME',
    comment: 'gain',
    amount: 150,
    balanceAfter: 180,
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '31138966-153f-4e05-9c7b-69ee95a9285b',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'car',
    amount: -40,
    balanceAfter: 140,
    categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '14360c6e-5f84-468b-8041-afe9e62b8512',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'Education',
    amount: -30,
    balanceAfter: 110,
    categoryId: '1272fcc4-d59f-462d-ad33-a85a075e5581',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: '51dd602b-83bf-4dd0-bcf8-3b57794c852a',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'movie',
    amount: -20,
    balanceAfter: 90,
    categoryId: 'c143130f-7d1e-4011-90a4-54766d4e308e',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
  {
    id: 'f8373b22-7a18-45b5-842a-18b06cbbf6ae',
    transactionDate: '2022-11-28',
    type: 'EXPENSE',
    comment: 'other',
    amount: -20,
    balanceAfter: 70,
    categoryId: '719626f1-9d23-4e99-84f5-289024e437a8',
    userId: 'e7d8cef8-0398-4018-8b10-2f11f7dab0ec',
  },
];


const DiagramTab = () => {
  const [summary, setSummary] = useState({});
  console.log("state ======", summary);
  //const period = useSelector(state => state.transaction.transaction);
  const years = new Set(period.map(el => el.transactionDate.slice(0, 4)));
  const monthes = new Set(period.map(el => el.transactionDate.slice(5, 7)));
  console.log(years.keys(), monthes.keys());

  useEffect(() => {
    async function getStats() {
      try {
        axios.defaults.baseURL = 'https://wallet.goit.ua';
        axios.defaults.headers.common.Authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIzOGMyNDIzMC0yNmNiLTQ3ZTMtOGQ1Yi1lYjdkOWJlNTU0M2IiLCJpYXQiOjE2Njk3MTcwODUsImV4cCI6MTAwMDAwMDE2Njk3MTcwODR9.kw2_2s9EPHhPx1zJRnA0j8enpY05168BvII-9hnZN2E`;
        const res = await axios.get('/api/transactions-summary');
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
    getStats().then((data => setSummary(data)));
  }, []);

  return (
    <>
      <StyledForm>
        <StyledSelect name="year">
          <option>""</option>
          {() => {
            let str = "";
            for (let el of years) str += `<option key='el'>${el}</option>`;
            return str;
          }}
        </StyledSelect>
        <StyledSelect name="month">
          <option>""</option>
          {monthes.keys().map(el => `<option key='el'>${el}</option>`)}
        </StyledSelect>
      </StyledForm>
      <Chart />
    </>
  );
};
export default DiagramTab;
