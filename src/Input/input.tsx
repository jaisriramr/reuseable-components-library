import React, { FC, Fragment } from "react";
import { InputProps } from "./input.types";
import TextField from '@mui/material/TextField';

const Input: FC<InputProps> = ({
  id,
  fullWidth,
  label,
  helperText,
  error,
  variant,
  onChange,
  value,
  size,
  placeholder,
  type,
  autoComplete,
  autoFocus,
  defaultValue,
  color,
  margin,
  maxRows,
  minRows,
  required,
  multiline,
  className,
}) => {

  return (
    <Fragment>
      <TextField 
          className={className}
          id={id} 
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth} 
          label={label} 
          error={error} 
          helperText={helperText}
          variant={variant} 
          onChange={onChange}
          size={size}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          color={color}
          multiline={multiline}
          margin={margin}
          maxRows={maxRows}
          minRows={minRows}
          required={required}
          />
    </Fragment>
  );
};

export default Input;
