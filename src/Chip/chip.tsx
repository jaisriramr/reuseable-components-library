import React, { FC, Fragment } from "react";
import { ChipProps } from "./chip.types";
import Chip from '@mui/material/Chip';

const TMButton: FC<ChipProps> = ({
  variant,
  clickable,
  color,
  disabled,
  label,
  size,
  skipFocusWhenDisabled,
  role,
  className,
}) => {

  return (
    <Fragment>
      <Chip 
        className={className}
        clickable={clickable}
        color={color}
        disabled={disabled}
        label={label}
        size={size}
        skipFocusWhenDisabled={skipFocusWhenDisabled}
        variant={variant}
        role={role}
      />
    </Fragment>
  );
};

export default TMButton;
