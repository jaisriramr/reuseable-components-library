import { ChangeEventHandler, ReactNode } from "react";

export interface CheckboxProps {
  checked?: boolean;
  checkedIcon?: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: ChangeEventHandler;
  size?: 'medium' | 'small';
  required?: boolean;
  value?: any;
  role?: any;
  inputProps?: object;
  className?: string;
  name?: any;
}