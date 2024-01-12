/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Heading from "./Heading";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  /* padding: 5px; */
  /* margin: 0 auto; */
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  /* width: 90%; */
  margin: 0 auto;
  background: #ecedfc;
  border-radius: 8px;
  padding: 2rem;

  @media (max-width: 580px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 250px;
  }

  @media (max-width: 295px) {
    width: 200px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 5px;
  top: -40px;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeWindow = () => setIsOpen(false);
  const openWindow = setIsOpen;
  return (
    <ModalContext.Provider value={{ isOpen, closeWindow, openWindow }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, children }) {
  const { openWindow } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openWindow(opens) });
}

function Window({ children }) {
  const { isOpen, closeWindow } = useContext(ModalContext);
  if (isOpen) {
    return createPortal(
      <Overlay>
        <StyledModal>
          <Button onClick={closeWindow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Heading as="h3">Add TODO</Heading>
          {cloneElement(children, { onCloseModal: closeWindow })}
        </StyledModal>
      </Overlay>,
      document.body
    );
  }
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
