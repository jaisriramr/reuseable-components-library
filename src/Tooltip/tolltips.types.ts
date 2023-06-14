import { ReactElement, ReactNode} from "react";

export interface ToolTipsProps {
  children: ReactElement<any, any>,
  arrow?: boolean,
  describeChild?: boolean,
  disableFocusListener?: boolean,
  disableHoverListener?: boolean,
  disableInteractive?: boolean,
  disableTouchListener?: boolean,
  enterDelay?: number,
  enterNextDelay?: number,
  enterTouchDelay?: number,
  followCursor?: boolean,
  id?: string,
  leaveDelay?: number,
  leaveTouchDelay?: number,
  onClose?: ((event: Event | React.SyntheticEvent<Element, Event>) => void) | undefined,
  onOpen?: ((event: React.SyntheticEvent<Element, Event>) => void) | undefined,
  open?: boolean,
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top',
  title?: ReactNode,
  TransitionProps?: Object
  className?: string,
}