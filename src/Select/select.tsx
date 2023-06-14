import React, { FC } from "react"
import { SelectProps } from "./select.types"
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from '@mui/material/ListItemIcon'

const TMSelect: FC<SelectProps> = ({
  autoWidth,
  defaultOpen,
  defaultValue,
  id,
  onChange,
  onClose,
  onOpen,
  open,
  variant,
  value,
  disabled,
  fullWidth,
  label,
  role,
  inputProps,
  menuOptions,
  className,
}) => {

  return (
      <FormControl fullWidth={fullWidth}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
            className={className}
            autoWidth={autoWidth}
            defaultOpen={defaultOpen}
            defaultValue={defaultValue}
            id={id}
            label={label}
            onChange={onChange}
            onClose={onClose}
            onOpen={onOpen}
            open={open}
            variant={variant}
            value={value}
            disabled={disabled}
            role={role}
            inputProps={inputProps}
            sx={{'& .MuiSelect-select': {display: 'flex'}}}
        >
          {
          menuOptions?.map((menu: any, i: any) => (
            <MenuItem sx={{display: 'flex'}} divider={menu.divider} disabled={menu.disabled} key={i} value={menu.value}>
              {menu.icon && <ListItemIcon>
                  {menu.iconProps}
                </ListItemIcon>}
              <Typography>{menu.text}</Typography>
            </MenuItem>
          ))
        }
        </Select>
    </FormControl>
  );
};

export default TMSelect;
