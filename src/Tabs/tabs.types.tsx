import { ReactNode } from "react";

export interface TabsProps {
  allowScrollButtonMobile?: boolean,
  ariaLabel?: string,
  ariaLabeledBy?: string,
  centered?: boolean,
  children?: ReactNode,
  classes?: object,
  indicatorColor?: 'primary' | 'secondary',
  onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined,
  orientation?: 'horizontal' | 'vertical',
  scrollButtons?: 'auto' | false | true,
  selectionFollowsFocus?: boolean,
  value?: any,
  textColor?: 'inherit' | 'primary' | 'secondary',
  variant?: 'fullWidth' | 'scrollable' | 'standard',
  visibleScrollbar?: boolean,
  tabLabel?: any,
  tabList?: any,
  className?: string,
}
