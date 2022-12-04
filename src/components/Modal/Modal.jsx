import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
    ModalBox,
    ModalContent,
} from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ closeModal, children }) => {

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
        <ModalBox onClick={handleBackdropClose}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalBox>,
        modalRoot
    );
};