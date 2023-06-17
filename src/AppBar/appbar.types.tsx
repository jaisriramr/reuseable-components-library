import { ReactNode } from "react";

export interface AppbarProps {
    className?: string,
    children?: ReactNode,
    color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent',
    enableColorOnDark?: boolean,
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',
    sx?: any;
}