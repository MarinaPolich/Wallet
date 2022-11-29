import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  Btn,
  ButtonAdd,
  ButtonCancel,
  ButtonClose,
  LabelIncome,
  Marker,
  Modal,
  ModalContent,
  ModalForm,
  ModalHead,
  Operation,
  RadioButton,
  RadioField,
} from './ModalAddTransaction.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import iconSet from './selection.json';
import IcomoonReact from 'icomoon-react';
import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');
const initialValues = {
  operation: 'Expense',
  transaction: '',
  sum: '',
  date: new Date(),
  comment: '',
};

const schema = yup.object().shape({
  operation: yup.string().required(),
  sum: yup.number().required('Enter amount'),
  date: yup
    .date()
    .required()
    .default(() => new Date()),
  transaction: yup.string().required(),
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

export const ModalAddTransaction = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());

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

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return createPortal(
    <Modal onClick={handleBackdropClose}>
      <ModalContent>
        <ModalHead>Add transaction</ModalHead>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {date => {
            console.log(date.values.operation);
            return (
              <ModalForm>
                <Operation>
                  <LabelIncome>
                    Income
                    <RadioField type="radio" name="operation" value="Income" />
                    <FromError name="income" />
                  </LabelIncome>
                  <label>
                    <RadioField type="radio" name="operation" value="Expense" />
                    <FromError name="expense" />
                    Expense
                  </label>
                  <Marker aria-hidden="true"></Marker>
                </Operation>
                {date.values.operation === 'Expense' && (
                  <Field as="select" name="transaction">
                    <option value="">Select a category</option>
                  </Field>
                )}

                <label htmlFor="sum"></label>
                <div>
                  <Field type="number" name="sum" placeholder="0.00" />
                  <FromError name="sum" />
                  <div>
                    <DatePicker
                      type="date"
                      name="date"
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      dateFormat="dd.MM.yyyy"
                    />
                    <FromError name="date" />
                  </div>
                </div>
                <label htmlFor="comment"></label>
                <div>
                  <Field type="text" name="comment" placeholder="Comment" />
                  <FromError name="comment" />
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
        <ButtonClose onClick={closeModal}>Close</ButtonClose>
        <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="close" />
      </ModalContent>
    </Modal>,
    modalRoot
  );
};
