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

export const primary12 = Template.bind({});
primary12.args = {
  variant: "primary",
  label: "Hello there",
  fontSize: "12px",
};

export const primary14 = Template.bind({});
primary14.args = {
  variant: "primary",
  label: "Hello there",
};

export const primary14_W600 = Template.bind({});
primary14_W600.args = {
  variant: "primary",
  label: "Hello there",
  fontWeight: 600
};

export const primary16 = Template.bind({});
primary16.args = {
  variant: "primary",
  label: "Hello there",
  fontSize: "16px",
  lineHeight: "22.72px",
  fontWeight: 600
};

export const primary18 = Template.bind({});
primary18.args = {
  variant: "primary",
  label: "Hello there",
  fontSize: "18px",
  lineHeight: "25.56px",
  fontWeight: 600
};

export const primary20 = Template.bind({});
primary20.args = {
  variant: "primary",
  label: "Hello there",
  fontSize: "20px",
  lineHeight: "28.4px",
  fontWeight: 600
};

export const primary32 = Template.bind({});
primary32.args = {
  variant: "primary",
  label: "Hello there",
  fontSize: "32px",
  lineHeight: "45.44px",
  fontWeight: 600
};


export const secondary12 = Template.bind({});
secondary12.args = {
  variant: "secondary",
  label: "Hello there",
  fontSize: "12px",
  color: "#D7D7D7",
};

export const secondary12_W600 = Template.bind({});
secondary12_W600.args = {
  variant: "secondary",
  label: "Hello there",
  fontSize: "12px",
  color: "#D7D7D7",
  fontWeight: 600,
};

export const secondary14 = Template.bind({});
secondary14.args = {
  variant: "secondary",
  label: "Hello there",
  color: "#D7D7D7",
};

export const secondary14_W600 = Template.bind({});
secondary14_W600.args = {
  variant: "secondary",
  label: "Hello there",
  color: "#D7D7D7",
  fontWeight: 600,
};


export const label12 = Template.bind({});
label12.args = {
  variant: "label",
  label: "Hello there",
  fontSize: "12px",
  color: "#C7BEB7",
};


export const label14 = Template.bind({});
label14.args = {
  variant: "label",
  label: "Hello there",
  color: "#C7BEB7",
};

export const error12 = Template.bind({});
error12.args = {
  variant: "label",
  label: "Hello there",
  color: "#f65151",
  fontSize: "12px",
};

export const error14 = Template.bind({});
error14.args = {
  variant: "label",
  label: "Hello there",
  color: "#f65151",
};

export const tag12 = Template.bind({});
tag12.args = {
  variant: "heading",
  label: "Hello there",
  color: "#e6813c",
  fontSize: "12px",
};

export const tag14 = Template.bind({});
tag14.args = {
  variant: "tag",
  label: "Hello there",
  color: "#fdbb35",
};





