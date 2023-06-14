import React, { FC } from "react"
import { TabsProps } from './tabs.types'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TMTabs: FC<TabsProps> = ({
  allowScrollButtonMobile,
  ariaLabel,
  ariaLabeledBy,
  centered,
  classes,
  indicatorColor,
  onChange,
  orientation,
  scrollButtons,
  selectionFollowsFocus,
  value,
  textColor,
  variant,
  visibleScrollbar,
  tabList,
className,
}) => {


  function CreateTab() {
    return (tabList?.map((tab: any , i :any) => {
      return (
        <Tab label={tab} id={`simple-tab-${i}`} key={i} aria-controls={`simple-tabpanel-${i}`} value={i} />
      )
    }))
  }

  return (
    <div>
      <Tabs 
        className={className}
        allowScrollButtonsMobile={allowScrollButtonMobile}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabeledBy}
        centered={centered}
        classes={classes}
        indicatorColor={indicatorColor}
        onChange={onChange}
        orientation={orientation}
        scrollButtons={scrollButtons}
        selectionFollowsFocus={selectionFollowsFocus}
        value={value}
        textColor={textColor}
        variant={variant}
        visibleScrollbar={visibleScrollbar}
      >
        {CreateTab()}
      </Tabs>
    </div>
  );
};

export default TMTabs;
