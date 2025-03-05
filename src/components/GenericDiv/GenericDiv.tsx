import { ReactNode } from 'react';
import './GenericDiv.scss';

type GenericDivProps = {
  children?: ReactNode;
  className?: string;
};

function GenericDiv({ children, className }: GenericDivProps) {
  return <div className={`GenericDiv ${className || ''}`}>{children}</div>;
}

export default GenericDiv;
