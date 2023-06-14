import React, { FC, Fragment } from "react"
import { CheckboxProps } from "./checkbox.types";
import Checkbox from '@mui/material/Checkbox';

const CheckBox: FC<CheckboxProps> = ({
  checked,
  checkedIcon,
  color,
  defaultChecked,
  disabled,
  id,
  onChange,
  size,
  required,
  value,
  role,
  inputProps,
  className
}) => {

  return (
    <Fragment>
      <Checkbox 
      className={className}
        checked={checked}
        checkedIcon={checkedIcon}
        color={color}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        onChange={onChange}
        size={size}
        required={required}
        value={value}
        role={role}
        inputProps={inputProps}
      />
    </Fragment>
  );
};

export default CheckBox;
