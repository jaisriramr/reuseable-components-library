import { ChangeEventHandler, ReactNode } from "react";

export interface DrawerProps {
    anchor?: 'bottom' | 'left' | 'right' | 'top',
    children?: ReactNode,
    elevation?: number,
    hideBackdrop?: boolean,
    open?: boolean,
    onClose?: ChangeEventHandler,
    transitionDuration?: number | { appear?: number, enter?: number, exit?: number },
    variant?: 'permanent' | 'persistent' | 'temporary',
    drawerData?: Array<object>,
    buttonData?: {
        text?: string,
        variant?: "contained" | "outlined" | "text",
    },
    drawerWidth?: number,
    className?: string,
    buttonClassName?: string,
    listClassName?: string,
}