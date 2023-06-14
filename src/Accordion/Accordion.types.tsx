import { ChangeEventHandler, ElementType, ReactNode } from "react";

export interface AccordionProps {
  children?: ReactNode,
  defaultExpanded?: boolean,
  disabled?: boolean,
  disableGutters?: boolean,
  expanded?: boolean,
  square?: boolean,
  TransitionComponent?: ElementType,
  TransitionProps?: object
  onChange?: ChangeEventHandler,
  role?: string,
  accordionData?: Array<object>,
  className?: string, 
}