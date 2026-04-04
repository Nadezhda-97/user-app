import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

export const Portal = ({ children }: Props) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return createPortal(children, modalRoot);
};
