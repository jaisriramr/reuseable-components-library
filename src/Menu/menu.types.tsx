import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export interface MenuProps {
  open: boolean,
  anchorEl?: HTMLElement,
  autoFocus?: boolean,
  children?: ReactNode,
  onClose: ChangeEventHandler,
  transitionDuration: 'auto' | number,
  TransitionProps?: object,
  MenuListProps?: object,
  variant?: 'menu' | 'selectedMenu',
  menuItems?: Array<Object>,
  buttonOptions?: {
    text?: string,
    onClick?: MouseEventHandler,
    variant?: "contained" | "outlined" | "text",
  },
  className?: string,
}