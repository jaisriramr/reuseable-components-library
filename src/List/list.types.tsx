import { ReactNode } from "react";

export interface ListProps {
  children?: ReactNode,
  dense?: boolean,
  disablePadding?: boolean,
  subheader?: ReactNode,
  list?: Array<object>,
  className?: string,
  disableGutters?: boolean,
  iconWidth?: string,
}
