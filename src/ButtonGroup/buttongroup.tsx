import React, { FC, Fragment } from "react";
import { ButtonGroupProps } from './buttongroup.types'
import Buttongroup from '@mui/material/ButtonGroup';

const ButtonGroup: FC<ButtonGroupProps> = ({
    children,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    orientation,
    size,
    variant,
    role,
    className,
}) => {

  return (
    <Fragment>
        <Buttongroup 
            className={className}
            children={children}
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            orientation={orientation}
            size={size}
            variant={variant}
            role={role}
        />
    </Fragment>
  );
};

export default ButtonGroup;
