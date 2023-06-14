import { SelectChangeEvent } from "@mui/material/Select";
import { ReactNode } from "react";

export interface SelectProps {
  autoWidth?: boolean,
  fullWidth?: boolean,
  children?: ReactNode,
  defaultOpen?: boolean,
  defaultValue?: any,
  defaultEmpty?: boolean,
  label?: string,
  id?: string,
  onChange?: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void) | undefined,
  onClose?:  ((event: React.SyntheticEvent<Element, Event>) => void) | undefined,
  onOpen?: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined,
  open?: boolean,
  variant?: 'filled' | 'outlined' | 'standard',
  value?: any,
  disabled?: boolean,
  error?: boolean,
  helperText?: string,
  role?: string,
  inputProps?: object,
  menuOptions?: Array<Object>,
  className?: string
}