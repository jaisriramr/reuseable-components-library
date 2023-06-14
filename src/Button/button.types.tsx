import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  variant?: "contained" | "outlined" | "text";

  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  disabled?: boolean;
  href?: string;
  disableElevation?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  role?: string;
  className?: string;
}