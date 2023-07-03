import React, { FC, Fragment } from "react";
import { EnTabsProps } from "./enTabs.types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider } from "@mui/material";

const EnTabs: FC<EnTabsProps> = ({
  tabList,
  columnSpacing,
  fontSize,
  fontWeight,
  value,
  onChange,
  marginLeft,
}) => {
  function CreateTab() {
    return tabList?.map((tab: any, i: any) => {
      return (
        <Tab
          label={tab}
          id={`simple-tab-${i}`}
          key={i}
          aria-controls={`simple-tabpanel-${i}`}
          value={i}
        />
      );
    });
  }

  return (
    <Fragment>
      <Divider
        sx={{
          background: "#CECECE !important",
          height: "0.5px !important",
          borderColor: "transparent !important",
          borderBottomWidth: "0 !important",
        }}
      />
      <Tabs
        TabIndicatorProps={{
            sx: {
                top: 0
            }
        }}
        sx={{
          "& .MuiButtonBase-root": {
            minWidth: '47px !important',
            textTransform: "capitalize !important",
            fontSize: fontSize + "px !important",
            fontWeight: fontWeight + " !important",
            marginRight: `${columnSpacing}px !important`,
          },
          marginLeft: marginLeft + " !important",
        }}
        value={value}
        onChange={onChange}
      >
        {CreateTab()}
      </Tabs>
    </Fragment>
  );
};

export default EnTabs;
