import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useState } from 'react';

import { Button, CloseIcon, SpanBtn } from './ButtonAddTransaction.styled';
import { close } from 'assets/media/icons';

export const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };
  return (
    <>
      <Button type="button" onClick={toggleModal}>
        <SpanBtn>
          <CloseIcon src={close} width={20} height={20} title="Close" />
        </SpanBtn>
      </Button>
      {isModalOpen && <ModalAddTransaction closeModal={toggleModal}
       />}
    </>
  );
};
