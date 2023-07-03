import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import EnTabs from "./enTabs";
import { CheckBox } from "@mui/icons-material";

const meta: Meta<typeof EnTabs> = {
  component: EnTabs,
  title: "tm/EnTabs",
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof EnTabs>;

export const Primary: Story = (args) => {

    const [value, setValue] = useState(0)

    function handleChange(event: React.SyntheticEvent, newValue: any) {
        setValue(newValue)
    }

  return (
    <EnTabs {...args} value={value} onChange={handleChange} />
  )
}

Primary.args = {
    tabList: ['All', 'In Process', 'OnHold', 'Approved'],
    
    marginLeft: '46px',
    columnSpacing: 26,
    fontSize: 16
};

