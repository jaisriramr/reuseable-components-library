import React, { FC, Fragment } from "react";
import { MenuProps } from "./menu.types";
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Button from '../Button/button'

const TMMenu: FC<MenuProps> = ({
  autoFocus,
  transitionDuration,
  TransitionProps,
  MenuListProps,
  variant,
  menuItems,
  buttonOptions,
  className,
}) => {

  const [ nanchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);
  const nopen = Boolean(nanchorEl);
  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <Button variant={buttonOptions?.variant} onClick={handleBtnClick}>{buttonOptions?.text}</Button>
      <Menu 
        className={className}
        open={nopen}
        anchorEl={nanchorEl}
        autoFocus={autoFocus}
        onClose={handleClose}
        transitionDuration={transitionDuration}
        TransitionProps={TransitionProps}
        MenuListProps={MenuListProps}
        variant={variant}
      >
        {
          menuItems?.map((menu: any, i: any) => (
            <div onClick={handleClose} key={i}>
              <MenuItem key={i} onClick={menu.onClick} sx={menu.sx}>{menu.text}</MenuItem>
            </div>
          ))
        }  
      </Menu>  
    </Fragment>
  );
};

export default TMMenu
