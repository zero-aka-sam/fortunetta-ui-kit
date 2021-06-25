import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "./Text";


export default {
  title: "Text",
  component: Text,
  argTypes: {
    // onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Text1 = Template.bind({});
Text1.args = {
   variant:"primary",
   label:"Hello there",
   color:"red"
};

export const Text2 = Template.bind({});
Text2.args = {
   variant:"primary",
   label:"Hello there",
   fontSize:'24px'
};


