import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  SelectField,
  ToggleRb,
  CloseIcon,
  Plus,
  SvgDate,
} from './EditTransactionModal.styled';
import { close, minus } from 'assets/media/icons';

import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { editTransactionThunk } from 'redux/finance/finance-operations';
import moment from 'moment';
import { categoriesSelector } from 'redux/selectors';

const modalRoot = document.querySelector('#modal-root');

const schema = yup.object().shape({
  operation: yup.string().required(),
  sum: yup.number().required('Enter amount'),
  date: yup
    .date()
    .required()
    .default(() => new Date()),
  transaction: yup.string().required('Select transaction type!'),
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

export const EditTransactionModal = ({ closeModal, transactionData }) => {
  const categories = useSelector(categoriesSelector);

  const [startDate, setStartDate] = useState(new Date());
  const initialValues = {
    operation: transactionData.type,
    transaction: transactionData.categoryId,
    sum: transactionData.amount,
    date: transactionData.transactionDate,
    comment: transactionData.comment,
  };

  const dispatch = useDispatch();
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
  };

  const handleSubmit = (values, { resetForm }) => {
    const date = moment(startDate).format('YYYY-MM-DD');

    dispatch(editTransactionThunk({ id: transactionData.id, ...values, date }));
    closeModal();
  };

  return createPortal(
    <Modal onClick={handleBackdropClose}>
      <ModalContent>
        <ModalHead>Edit transaction</ModalHead>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {props => {
            return (
              <ModalForm>
                <Operation>
                  <RadioFieldIncome
                    id="income"
                    type="radio"
                    checked={props.values.operation === 'INCOME'}
                    name="operation"
                    value="INCOME"
                  />
                  <RadioFieldExpense
                    id="expense"
                    type="radio"
                    checked={props.values.operation === 'EXPENSE'}
                    name="operation"
                    value="EXPENSE"
                  />
                  <LabelIncome htmlFor="income">Income </LabelIncome>
                  <ToggleRb>
                    <Plus>
                      <CloseIcon
                        src={
                          props.values.operation === 'INCOME' ? close : minus
                        }
                        width={20}
                        height={20}
                        title="Change"
                      />
                    </Plus>
                  </ToggleRb>
                  <LabelExpense htmlFor="expense">Expense</LabelExpense>
                </Operation>

                {props.values.operation === 'EXPENSE' && (
                  <div>
                    <SelectField as="select" name="transaction">
                      {categories.map(item => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </SelectField>
                    <FromError name="transaction" />
                  </div>
                )}

                <AmountDate>
                  <label htmlFor="sum"></label>
                  <AmountField type="number" name="sum" placeholder="0.00" />
                  <FromError name="sum" />
                  <DateContainer>
                    <DateField
                      id="date"
                      type="date"
                      name="date"
                      selected={startDate}
                      onChange={handleChangeDate}
                      dateFormat="dd.MM.yyyy"
                    />
                    <FromError name="date" />
                    <IconDate htmlFor="date">
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
                  <ButtonAdd type="submit">Change</ButtonAdd>
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