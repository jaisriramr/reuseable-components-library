import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  fullWidth?: boolean; 
  type?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'medium' | 'small';
  autoFocus?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  disabled?:boolean;
  margin?: 'dense' | 'none' | 'normal';
  maxRows?: number | string;
  minRows?: number | string;
  required?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  value?: string;
  multiline?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}