import { useCallback } from 'react';
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
  ErrorText,
} from './FormModal.styled';

import { close, minus } from 'assets/media/icons';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

import moment from 'moment';
import { SelectField } from 'components/SelectField/SelectField';

const TypeOperation = {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
};

const initialValues = {
  transactionDate: moment().format('YYYY-MM-DD'),
  type: TypeOperation.EXPENSE,
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
  categoryId: yup.string(),
  comment: yup.string().max(10, 'Maximum number of characters 10'),
});

const FromError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FormModal = ({
  closeModal,
  submitText,
  submitHandler,
  initial = initialValues,
}) => {
  const categoriesName = useSelector(state => state.categories.items);
  const optionFunc = useCallback(
    filter =>
      categoriesName
        ?.filter(({ type }) => type === filter)
        .map(({ name, id }) => ({ value: id, label: name })),
    [categoriesName]
  );

  const handleSubmit = (values, { resetForm, ...props }) => {
    values.amount =
      values.type === TypeOperation.EXPENSE
        ? -Math.abs(values.amount)
        : Math.abs(values.amount);
    submitHandler(values);
  };
  return (
    <Formik
      initialValues={initial}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {props => {
        const handleChange = ({ target }) => {
          props.setFieldValue(target.name, target.value);
          if (target.value === TypeOperation.INCOME) {
            props.setFieldValue(
              'categoryId',
              optionFunc(target.value)
                .map(x => x.value)
                .find(x => x)
            );
          } else {
            props.setFieldValue('categoryId', initial.categoryId);
          }
        };

        const setStartDate = value => {
          const date = moment(value).format('YYYY-MM-DD');
          props.setFieldValue('transactionDate', date);
        };
        return (
          <ModalForm>
            <Operation>
              <RadioFieldIncome
                id="income"
                type="radio"
                checked={props.values.type === TypeOperation.INCOME}
                onChange={handleChange}
                name="type"
                value={TypeOperation.INCOME}
              />
              <RadioFieldExpense
                id="expense"
                type="radio"
                checked={props.values.type === TypeOperation.EXPENSE}
                onChange={handleChange}
                name="type"
                value={TypeOperation.EXPENSE}
              />
              <LabelIncome htmlFor="income">Income </LabelIncome>
              <ToggleRb>
                <Plus>
                  <CloseIcon
                    src={
                      props.values.type === TypeOperation.INCOME ? close : minus
                    }
                    width={20}
                    height={20}
                    title="Change"
                  />
                </Plus>
              </ToggleRb>
              <LabelExpense htmlFor="expense">Expense</LabelExpense>
            </Operation>

            {props.values.type === TypeOperation.EXPENSE && (
              <div>
                <Field
                  id="categoryId"
                  name="categoryId"
                  component={SelectField}
                  options={optionFunc(props.values.type)}
                />
                <FromError name="categoryId" />
              </div>
            )}

            <AmountDate>
              <label htmlFor="amount">
                <AmountField
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  required
                />
                {/* <FromError name="amount" /> */}
              </label>
              <DateContainer>
                <DateField
                  id="transactionDate"
                  type="date"
                  name="transactionDate"
                  selected={moment(props.values.transactionDate).toDate()}
                  onChange={setStartDate}
                  dateFormat="dd.MM.yyyy"
                  required
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
              <FromError name="comment" />
            </div>
            <Btn>
              <ButtonAdd type="submit">{submitText}</ButtonAdd>
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
