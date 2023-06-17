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
  tmInput,
}) => {

  return (
    <Fragment>
      <TextField 
          sx={
             tmInput ? {
              fontSize: '14px !important',
              borderRadius: '0',
              height: '41px !important',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid transparent !important',
              },
              '&:hover': {
                border: '1px solid #979797 !important'
              },
              '&:focus': {
                border: '1px solid #979797 !important'
              }
            } : {}
          }
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
