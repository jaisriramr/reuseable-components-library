import { ReactNode } from "react";

export interface ChipProps {
  clickable?: boolean,
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  disabled?: boolean,
  label?: ReactNode,
  onDelete?: Function,
  size?: 'medium' | 'small',
  skipFocusWhenDisabled?: boolean,
  variant?: 'filled' | 'outlined',
  role?: string,
  className?: string,
}