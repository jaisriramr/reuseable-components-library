import { ChangeEventHandler, ReactNode } from "react";

export interface RadioProps {
  checked?: boolean;
  checkedIcon?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  id?: string;
  onChange?: ChangeEventHandler;
  size?: 'medium' | 'small';
  value?: any;
  required?: boolean;
  name?: string;
  className?: string
}