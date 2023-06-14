import React, { FC } from "react"
import { SwitchProps } from './switch.types'
import Switch from '@mui/material/Switch';

const SwitchBox: FC<SwitchProps> = ({
  checked,
  color,
  defaultChecked,
  disableRipple,
  disabled,
  edge,
  id,
  onChange,
  required,
  size,
  value,
  inputProps,
  className,
}) => {

  return (
    <div>
      <Switch
          className={className}
          checked={checked}
          color={color}
          defaultChecked={defaultChecked}
          disableRipple={disableRipple}
          disabled={disabled}
          edge={edge}
          id={id}
          onChange={onChange}
          required={required}
          size={size}
          inputProps={inputProps}
          value={value}
      ></Switch>
    </div>
  );
};

export default SwitchBox;
