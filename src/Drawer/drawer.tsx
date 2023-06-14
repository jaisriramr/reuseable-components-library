import React, { FC } from "react"
import { DrawerProps } from './drawer.types'
import Drawer from '@mui/material/Drawer'
import Button from '../Button/button'
import List from '@mui/material/List'
import ListItem from '../ListItem/listItem'
import Box from '../Box/box'
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

const TMDrawer: FC<DrawerProps> = ({
  anchor,
  elevation,
  hideBackdrop,
  transitionDuration,
  variant,
  drawerData,
  buttonData,
  drawerWidth,
  className,
  buttonClassName,
  listClassName,
}) => {

  const [nOpen, setNOpen] = React.useState(false);

  function assignChild() {

    return (
      <div>
        <Box sx={{
          width: drawerWidth
        }} onKeyDown={() => setNOpen(false)} >
          <List className={listClassName}>
            {
              drawerData?.map((drawer: any, i: any) => (
                <ListItem divider={drawer.driver} key={i}>
                  <ListItemButton>
                    <ListItemIcon>
                      {drawer.iconHtml}
                    </ListItemIcon>
                    <ListItemText>
                      {drawer.text}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </div>
    )
  }

  return (
    <div>
      <Button className={buttonClassName} onClick={() => setNOpen(true)} variant={buttonData?.variant}>{buttonData?.text}</Button>
      <Drawer
        className={className}
        anchor={anchor}
        elevation={elevation}
        hideBackdrop={hideBackdrop}
        open={nOpen}
        transitionDuration={transitionDuration}
        variant={variant}
        onClose={() => setNOpen(false)}
      >
        {assignChild()}
      </Drawer>
    </div>
  );
};

export default TMDrawer;
