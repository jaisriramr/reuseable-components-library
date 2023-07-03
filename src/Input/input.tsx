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
  sx,
  onMouseDown,
  onMouseLeave,
  onMouseOut,
  onMouseOver,
  onMouseEnter,
  disabled
}) => {

{/* <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.615 0.515205L9.47374 10.5187L0.556737 0.966089L10.615 0.515205Z" fill="#EA4335"/>
</svg> */}


  return (
    <Fragment>
      <TextField 
      disabled={disabled}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
          sx={
             tmInput ? {
              'input': {
                padding: '10px 6px'
              },
              '& .Mui-error': {
                borderColor: '#F96C6C'
              },
              '& .MuiInputBase-root': {
                borderRadius: '0 !important',
                height: '41px',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                border: '1px solid transparent !important',
              },  
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
                borderWidth: '1px !important'
              },
              '&:hover': {
                borderColor: '#979797 !important'
              },
              '&:focus': {
                backgroundColor: 'transparent !important'
              }
            } : sx
          }
          className={className}
          id={id} 
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth} 
          label={label} 
          error={error} 
          
          helperText={
            helperText
          }
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
