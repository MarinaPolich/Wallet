import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  Form,
  ButtonClose,
  Modal,
  ModalContent,
} from './ModalAddTransaction.styled';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import iconSet from './selection.json';
import IcomoonReact from 'icomoon-react';

const modalRoot = document.querySelector('#modal-root');

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

  return createPortal(
    <Modal onClick={handleBackdropClose}>
      <ModalContent>
        <h1>Add transaction</h1>
        <Form>
          <label>
            Income
            <input type="radio" name="transaction" value="Income" />
          </label>
          <label>
            <input type="radio" name="transaction" value="Expense" />
            Expense
          </label>
          <select>
            <option placeholder="Select a category"></option>
          </select>
          <label>
            <input type="text" name="sum" placeholder="0.00" />
          </label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
          />
          <label>
            <input type="text" name="comment" placeholder="Comment" />
          </label>
          <button>ADD</button>
          <button>CANCEL</button>
        </Form>
        <ButtonClose onClick={closeModal}>Close</ButtonClose>
        <IcomoonReact iconSet={iconSet} color="#444" size={20} icon="close" />
      </ModalContent>
    </Modal>,
    modalRoot
  );
};
