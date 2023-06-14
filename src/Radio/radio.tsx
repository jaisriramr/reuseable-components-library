import React, { FC, Fragment } from "react"
import { RadioProps } from "./radio.types";
import Radio from '@mui/material/Radio';

const TMRadio: FC<RadioProps> = ({
  checked,
  checkedIcon,
  color,
  disabled,
  id,
  onChange,
  size,
  value,
  required,
  name,
className,
}) => {

  return (
    <Fragment>
      <Radio
      className={className}
        id={id}
        checked={checked}
        checkedIcon={checkedIcon}
        color={color}
        disabled={disabled}
        onChange={onChange}
        size={size}
        value={value}
        required={required}
        name={name}
      />
    </Fragment>
  );
};

export default TMRadio;
