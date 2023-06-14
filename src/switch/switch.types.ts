import { ChangeEventHandler } from "react";

export interface SwitchProps {
  checked?: boolean,
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  defaultChecked?: boolean,
  disabled?: boolean,
  disableRipple?: boolean,
  edge?: 'end' | 'start' | false,
  id?: string,
  onChange?: ChangeEventHandler,
  required?: boolean,
  size?: 'medium' | 'small',
  value?: any,
  inputProps?: object,
  className?: string
}