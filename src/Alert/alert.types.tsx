
import { SnackbarCloseReason } from "@mui/material";
import { ReactNode } from "react";

export interface AlertProps {
  action?: ReactNode;
  children?: ReactNode;
  closeText?: string;
  color?: 'error' | 'info' | 'success' | 'warning';
  icon?: ReactNode;
  onClose?: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined;
  onSnackBarClose?: ((event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined
  role?: string;
  severity?: 'error' | 'info' | 'success' | 'warning';
  variant?: 'filled' | 'outlined' | 'standard';
  type?: 'alert' | 'snackbar';
  autoHideDuration?: number;
  disableWindowBlurListener?: boolean;
  key?: any;
  message?: ReactNode;
  open?: boolean;
  resumeHideDuration?: number;
  transitionDuration?: number;
  anchorOrigin?: { horizontal: 'center' | 'left' | 'right' , vertical: 'bottom' | 'top' };
  className?: string;
}
