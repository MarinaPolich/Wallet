import { useDispatch } from 'react-redux';
import { ButtonClose, ModalHead } from './EditTransactionModal.styled';
import { editTransactionThunk } from 'redux/finance/finance-operations';
import { FormModal } from 'components/FormModal/FormModal';
import { Modal } from 'components/Modal/Modal';

export const EditTransactionModal = ({ closeModal, transactionData }) => {
  const dispatch = useDispatch();

  const handlerSubmit = values => {
    console.log(values.transactionDate);

    dispatch(editTransactionThunk(values));
    closeModal();
  };

  return (
    <Modal>
      <ModalHead>Edit transaction</ModalHead>

      <FormModal
        closeModal={closeModal}
        submitText="UPDATE"
        initial={{
          ...transactionData,
          amount: Math.abs(transactionData.amount),
        }}
        submitHandler={handlerSubmit}
      />

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
    </Modal>
  );
};

// const handleSubmit = (values, { resetForm }) => {
//   const date = moment(startDate).format('YYYY-MM-DD');

//   dispatch(editTransactionThunk({ id: transactionData.id, ...values, date }));
//   closeModal();
// };

// const initialValues = {
//   operation: transactionData.type,
//   transaction: transactionData.categoryId,
//   sum: transactionData.amount,
//   date: transactionData.transactionDate,
//   comment: transactionData.comment,
// };

// const schema = yup.object().shape({
//   operation: yup.string().required(),
//   sum: yup.number().required('Enter amount'),
//   date: yup
//     .date()
//     .required()
//     .default(() => new Date()),
//   transaction: yup.string().required('Select transaction type!'),
//   comment: yup.string(),
// });
