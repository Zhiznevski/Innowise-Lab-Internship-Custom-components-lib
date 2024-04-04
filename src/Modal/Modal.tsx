import { createPortal } from 'react-dom';
import React, { useState } from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactElement;
}
export function MockChildren() {
  return (
    <>
      <h2 className={styles.title}>Title in a modal</h2>
      <p className={styles.description}>Description in a modal</p>
    </>
  );
}

export function Modal({ open = false, onClose = () => {}, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className={styles.windowWrapper}>
      <div aria-hidden onClick={onClose} className={styles.background} />
      <div className={styles.window}>{children}</div>
    </div>
  );
}

export default function ModalApp() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button onClick={handleOpen}>open modal</Button>
      {createPortal(
        <Modal open={open} onClose={handleClose}>
          <MockChildren />
        </Modal>,
        document.body
      )}
    </>
  );
}
