import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  z-index: 400;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(1.1)'};
  transition: visibility 0s linear ${props => props.isOpen ? '0s' : '0.3s'}, 
              opacity 0.3s ${props => props.isOpen ? '0s' : '0s'}, 
              transform 0.3s;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
`;

const ModalInner = styled.div`
  transform: translate3d(-50%, -50%, 0);
  padding: 5.6rem 3.2rem 2rem;
  width: 90vw;
  max-width: 34rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;

  h3 {
    margin-top: 0;
  }

  svg {
    fill: #8dc63f;
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const CloseButton = styled.span`
  display: block;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 12px;
  height: 12px;
  position: absolute;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 2px;
    height: 12px;
    top: 0;
    left: 5px;
    background-color: #000000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const Form = styled.form`
  input[type="email"] {
    height: 5.6rem;
    padding: 1.2rem 24px 1.2rem;
    width: 100%;
    margin-bottom: 1.6rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1.5rem;
    outline: none;

    &:focus {
      border-color: #8dc63f;
      box-shadow: 0 0 5px rgba(141, 198, 63, 0.8);
    }
  }

  input[type="submit"] {
    width: 100%;
    height: 5.6rem;
    background: #8dc63f;
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .6rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all .3s ease;

    &:hover {
      background: #000000;
    }
  }

  label {
    color: #000000;
    font-family: "Gothic A1", sans-serif;
    font-size: 1.3rem;
    line-height: 1.846;
    padding: 0 2rem;
    display: block;
    margin-top: 1rem;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setMessage('Thank you for subscribing!');
    setTimeout(() => {
      onClose();
      setMessage('');
      setEmail('');
    }, 2000);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalInner>
        <CloseButton onClick={onClose} />
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>

        <h3>Sign Up</h3>
        <p>
          Be the first to know about the latest updates and
          get exclusive offer on our grand opening.
        </p>

        <Form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input type="submit" value="Subscribe" />
          {message && <label>{message}</label>}
        </Form>
      </ModalInner>
    </ModalOverlay>
  );
};

export default Modal;
