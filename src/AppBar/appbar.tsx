import React, { FC } from "react"
import { AppbarProps } from './appbar.types'
import AppBar from '@mui/material/AppBar'

const Appbar: FC<AppbarProps> = ({
    children,
    color,
    enableColorOnDark,
    position,  
    className,
    sx,
}) => {


  return (
    <div>
        <AppBar 
            className={className}
            color={color}
            enableColorOnDark={enableColorOnDark}
            position={position}
            sx={sx}
        >
            {children}
        </AppBar>
    </div>
  );
};

export default Appbar;
