import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import { Typography } from "@mui/material";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "tm/Input",
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args) => {

  return (
    <>
    <Input {...args} />
    <Typography>Hello</Typography>
    </>
  )
}


Primary.args = {
    tmInput: true,
    fullWidth: true,
    placeholder: 'hello content',
    variant: 'outlined',
    error: true,
    helperText: 'Please enter text within 300 - 1500'
};
