import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  AmountDate,
  AmountField,
  Btn,
  ButtonAdd,
  ButtonCancel,
  ButtonClose,
  CommentField,
  DateContainer,
  DateField,
  IconDate,
  LabelExpense,
  LabelIncome,
  Modal,
  ModalContent,
  ModalForm,
  ModalHead,
  Operation,
  RadioFieldExpense,
  RadioFieldIncome,
  ToggleRb,
  CloseIcon,
  Plus,
  SvgDate,
  SelectField,
} from './ModalAddTransaction.styled';
import { close, minus } from 'assets/media/icons';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { categories, addTransaction } from 'redux/transaction/operations';
// import { getAllTransactionsThunk } from 'redux/finance/finance-operations';

const modalRoot = document.querySelector('#modal-root');
const initialValues = {
  transactionDate: new Date(),
  type: 'EXPENSE',
  categoryId: '',
  amount: '',
  comment: '',
};

const schema = yup.object().shape({
  type: yup.string().required(),
  amount: yup.number().required('Enter amount').max(100000).min(0),
  transactionDate: yup
    .date()
    .required()
    .default(function () {
      return new Date();
    }),
  // categoryId: yup.mixed().required('Field must be filled'),
  comment: yup.string().max(15),
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

export const ModalAddTransaction = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();
  const categoriesName = useSelector(state => state.categories.items);
  // const [transType, setTransType] = useState('EXPENSE');
  // console.log(categoriesName.items);
  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  // закрытие модалки по ескейпу
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  // закрытие модалки по бекдропу
  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  // FORM

  const handleChangeDate = e => {
    setStartDate(e);
    // console.log('object :>> ', e);
    const day = e.toISOString().slice(0, 10);
    console.log(day);
  };

  const handleChange = e => {
    //console.log(e.target.value);
  };

  const handleSubmit = (values, { resetForm, ...props }) => {
    values.transactionDate = values.transactionDate.toISOString().slice(0, 10);
    values.categoryId = select;
    values.amount =
      values.type === 'EXPENSE' ? '-' + values.amount : '' + values.amount;
    if (values.type === 'INCOME') {
      values.categoryId = categoriesName.find(
        ({ type }) => type === 'INCOME'
      ).id;
    }
    console.log(values);
    dispatch(addTransaction(values));
    closeModal();
    // resetForm();
  };

  // const handleSubmit = (values, { setFieldError, resetForm, ...props }) => {
  //   values.transactionDate = values.transactionDate.toLocaleDateString();
  //   if (values.type === 'EXPENSE' && values.categoryId === null) {
  //     setFieldError('categoryId', 'categoryId is requyred');
  //     return;
  //   }
  //   console.log(props);
  //   resetForm();
  // };

  return createPortal(
    <Modal onClick={handleBackdropClose}>
      <ModalContent>
        <ModalHead>Add transaction</ModalHead>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {props => {
            // console.log(props.values);
            return (
              <ModalForm>
                <Operation onChange={handleChange}>
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
                      options={categoriesName
                        ?.filter(category => category.type === 'EXPENSE')
                        .map(({ name, id }) => ({
                          value: id,
                          label: name,
                        }))}
                      placeholder={'Select a category'}
                      unstyled
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          display: 'flex',
                          alignItems: 'center',
                          outline: 'none',
                          border: 'none',
                          borderBottom: '1px solid var(--gray-5)',
                          borderRadius: '0',
                          fontSize: '18px',
                          lineHeight: '1.5',
                          padding: '8px',
                          textAlign: 'center',
                        }),
                        placeholder: baseStyles => ({
                          ...baseStyles,
                          color: 'var(--gray-4)',
                        }),
                        option: (baseStyles, { isFocused }) => ({
                          ...baseStyles,
                          backgroundColor: isFocused && 'var(--white)',
                          fontWeight: isFocused && '700',
                          color: isFocused && 'var(--car)',
                          cursor: 'pointer',
                          padding: '15px 0 15px',
                        }),
                        menu: baseStyles => ({
                          ...baseStyles,
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          backdropFilter: 'blur(25px)',
                          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                          borderRadius: '20px',
                          textAlign: 'center',
                        }),
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '42%',
                        left: '35%',
                      }}
                    >
                      <FromError name="categoryId" />
                    </span>
                  </div>
                )}

                <AmountDate>
                  <AmountField type="number" name="amount" placeholder="0.00" />
                  {props.values.type === 'EXPENSE' ? (
                    <label
                      htmlFor="amount"
                      style={{ position: 'absolute', top: '54%', left: '20%' }}
                    >
                      <FromError name="amount" />
                    </label>
                  ) : (
                    <label
                      htmlFor="amount"
                      style={{ position: 'absolute', top: '40%', left: '20%' }}
                    >
                      <FromError name="amount" />
                    </label>
                  )}

                  <DateContainer>
                    <DateField
                      id="transactionDate"
                      type="date"
                      name="transactionDate"
                      selected={startDate}
                      onChange={handleChangeDate}
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
                  <CommentField
                    type="text"
                    name="comment"
                    placeholder="Comment"
                  />
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
        <ButtonClose onClick={closeModal}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeMiterlimit="4"
              strokeWidth="1.7778"
              stroke="#000"
              d="M1.778 1.778l28.444 28.444"
            ></path>
            <path
              fill="none"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeMiterlimit="4"
              strokeWidth="1.7778"
              stroke="#000"
              d="M1.778 30.222l28.444-28.444"
            ></path>
          </svg>
        </ButtonClose>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};
