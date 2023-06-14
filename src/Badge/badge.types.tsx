import { ReactNode } from "react";

export interface BadgeProps {
    anchorOrigin?: { horizontal: 'left' | 'right', vertical: 'bottom' | 'top' }
    badgeContent?: ReactNode,
    children?: ReactNode,
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    invisible?: boolean,
    max?: number,
    overlap?: 'circular' | 'rectangular',
    showZero?: boolean,
    variant?: 'dot' | 'standard',
    role?: string,
    className?: string
}