import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HoverMenu from "./hoverMenu";
import { Typography } from "@mui/material";

const meta: Meta<typeof HoverMenu> = {
  component: HoverMenu,
  title: "tm/HoverMenu",
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof HoverMenu>;

export const Primary: Story = (args) => {

  return (
    <>
    <HoverMenu {...args} />
    </>
  )
}


Primary.args = {
};
