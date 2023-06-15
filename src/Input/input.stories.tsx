import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

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
    <Input {...args} />
  )
}


Primary.args = {
    tmInput: true,
    placeholder: 'hello content',
    variant: 'outlined'
};
