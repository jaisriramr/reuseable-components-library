import React, { FC, Fragment } from "react";
import { ListProps } from "./list.types";
import List from '@mui/material/List';
import ListItem from '../ListItem/listItem'
import ListItemButton from '../ListItemButton/listItemButton'
import ListItemIcon from '../ListItemIcon/listItemIcon'
import ListItemText from '../ListItemText/listItemText'


const TMMenu: FC<ListProps> = ({
  list,
  className,
}) => {

  return (
    <Fragment>
        <List className={className}>
            {
                list?.map((l: any, i: any) => (
                    <ListItem key={i} disablePadding={l.disablePadding} disabled={l.disabled} disableGutters={l.disableGutters}>
                        <ListItemButton disableGutters={l.disableGutters} disableRipple={l.disableRipple} disableTouchRipple={l.disableTouchRipple} divider={l.divider}
                            sx={{
                                "&.MuiListItemButton-root:hover": {
                                    background: `${l.hoverEffect}`
                                }
                            }}
                        >
                            {
                                l.icon 
                                &&
                            <ListItemIcon sx={{minWidth: `${l.iconWidth}`}}>
                                {l.iconElement}
                            </ListItemIcon>
                            }
                            <ListItemText sx={{fontSize: `${l.fontSize}`, color: `${l.fontColor}`}}>
                                {l.text}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    </Fragment>
  );
};

export default TMMenu
