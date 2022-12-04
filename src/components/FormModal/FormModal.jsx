import { useState } from 'react';
import {
  AmountDate,
  AmountField,
  Btn,
  ButtonAdd,
  ButtonCancel,
  CommentField,
  DateContainer,
  DateField,
  IconDate,
  LabelExpense,
  LabelIncome,
  ModalForm,
  Operation,
  RadioFieldExpense,
  RadioFieldIncome,
  ToggleRb,
  CloseIcon,
  Plus,
  SvgDate,
  SelectField,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import { close, minus } from 'assets/media/icons';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import moment from 'moment';

const initialValues = {
  transactionDate: new Date(),
  type: 'EXPENSE',
  categoryId: '',
  amount: '',
  comment: '',
};

const schema = yup.object().shape({
  type: yup.string().required(),
  amount: yup.number().required('Enter amount'),
  transactionDate: yup
    .date()
    .required()
    .default(() => new Date()),
  categoryId: yup.object(),
  comment: yup.string(),
});

const ErrorText = styled.p`
  color: red;
`;

const FromError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FormModal = ({ closeModal, submitHandler, initial = initialValues }) => {
  console.log('initial',initial)
  const [startDate, setStartDate] = useState(initial.transactionDate);
  const [select, setSelect] = useState('');
  const categoriesName = useSelector(state => state.categories.items);


  const handleSubmit = (values, { resetForm, ...props }) => {
    const date = moment(startDate).format('YYYY-MM-DD');
    values.transactionDate = date;

    // values.transactionDate = values.transactionDate.toISOString().slice(0, 10);

    values.categoryId =
      values.type === 'EXPENSE'
        ? select
        : '063f1132-ba5d-42b4-951d-44011ca46262';
    values.amount =
      values.type === 'EXPENSE' ? '-' + values.amount : '' + values.amount;
    console.log(values);
    submitHandler(values);
    // dispatch(addTransaction(values));
    // closeModal();
    //resetForm();
  };
  return (
    <Formik
      initialValues={initial}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => {
        // console.log(props.values);
        return (
          <ModalForm>
            <Operation>
              <RadioFieldIncome
                id="income"
                type="radio"
                checked={props.values.type === 'INCOME'}
                name="type"
                value="INCOME"
              />
              <RadioFieldExpense
                id="expense"
                type="radio"
                checked={props.values.type === 'EXPENSE'}
                name="type"
                value="EXPENSE"
              />
              <LabelIncome htmlFor="income">Income </LabelIncome>
              <ToggleRb>
                <Plus>
                  <CloseIcon
                    src={props.values.type === 'INCOME' ? close : minus}
                    width={20}
                    height={20}
                    title="Change"
                  />
                </Plus>
              </ToggleRb>
              <LabelExpense htmlFor="expense">Expense</LabelExpense>
            </Operation>

            {props.values.type === 'EXPENSE' && (
              <div>
                <SelectField
                  name="categoryId"
                  onChange={option => {
                    setSelect(option.value);
                  }}
                  options={categoriesName?.map(({ name, id }) => ({
                    value: id,
                    label: name,
                  }))}
                  placeholder={'Select a category'}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      outline: 'none',
                      border: '1px solid var(--gray-5)',
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                    }),
                  }}
                />
                <FromError name="categoryId" />
              </div>
            )}

            <AmountDate>
              <label htmlFor="amount"></label>
              <AmountField type="number" name="amount" placeholder="0.00" />
              <FromError name="amount" />
              <DateContainer>
                <DateField
                  id="transactionDate"
                  type="date"
                  name="transactionDate"
                  selected={startDate}
                  onChange={setStartDate}
                  dateFormat="dd.MM.yyyy"
                />
                <FromError name="transactionDate" />
                <IconDate htmlFor="transactionDate">
                  <SvgDate
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z"
                      fill="#4A56E2"
                    />
                  </SvgDate>
                </IconDate>
              </DateContainer>
            </AmountDate>
            <label htmlFor="comment"></label>
            <div>
              <CommentField type="text" name="comment" placeholder="Comment" />
            </div>
            <Btn>
              <ButtonAdd type="submit">ADD</ButtonAdd>
              <ButtonCancel type="button" onClick={closeModal}>
                CANCEL
              </ButtonCancel>
            </Btn>
          </ModalForm>
        );
      }}
    </Formik>
  );
};
