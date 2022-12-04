import {
  ButtonClose,
  ModalHead,
} from './ModalAddTransaction.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { FormModal } from 'components/FormModal/FormModal';
import { Modal } from 'components/Modal/Modal';
import { addTransactionThunk } from 'redux/finance/finance-operations';

export const ModalAddTransaction = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handlerSubmit = (values) => {
     dispatch(addTransactionThunk(values));
     closeModal();
  }
  return <Modal>
    <ModalHead>Add transaction</ModalHead>

    <FormModal closeModal={closeModal} submitText="ADD" submitHandler={handlerSubmit} />

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
  </Modal>;
};
