import { ChangeEventHandler } from "react";

export interface SliderProps {
  ariaLabel?: string,
  ariaLabelledBy?: string,
  ariaValuetext?: string,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  disableSwap?: boolean,
  getAriaLabel?: ChangeEventHandler,
  defaultValue?: any,
  max?: number,
  min?: number,
  name?: string,
  role?: string,
  onChange?: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined,
  onChangeCommitted?: ((event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined,
  orientation?: 'horizontal' | 'vertical',
  scale?: ((value: number) => number) | undefined,
  size?: 'small' | 'medium',
  step?: number,
  tabIndex?: number,
  track?: 'inverted' | 'normal',
  value?: Array<number> | number,
  valueLabelDisplay?: 'auto' | 'off' | 'on',
  className?: string
}