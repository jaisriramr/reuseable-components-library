import { ReactNode } from "react";

export interface ButtonGroupProps {
    children?: ReactNode,
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    disabled?: boolean,
    disableElevation?: boolean,
    disableFocusRipple?: boolean,
    disableRipple?: boolean,
    fullWidth?: boolean,
    orientation?: 'horizontal' | 'vertical',
    size?: 'small' | 'medium' | 'large',
    variant?: 'contained' | 'outlined' | 'text',
    role?: string,
    className?: string,
}
