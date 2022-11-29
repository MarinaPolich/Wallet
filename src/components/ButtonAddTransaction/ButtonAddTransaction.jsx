import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useState } from 'react';
import { Button, SpanBtn } from './ButtonAddTransaction.styled';

export const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };
  return (
    <>
      <Button type="button" onClick={toggleModal}>
        <SpanBtn>+</SpanBtn>
      </Button>
      {isModalOpen && <ModalAddTransaction closeModal={toggleModal} />}
    </>
  );
};
