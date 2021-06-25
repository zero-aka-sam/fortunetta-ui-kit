import React from "react";
import { Story, Meta } from "@storybook/react";

import { Link, LinkProps } from "./Link";
import roulette from '../../assets/icons/roulette.svg';
import matchBetting from '../../assets/icons/matchBetting.svg';
import coinFlip from '../../assets/icons/coinFlip.svg';

export default {
  title: "NavBar/Link",
  component: Link,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
  label: "Roulette",
  img: roulette
};

export const Link2 = Template.bind({});
Link2.args = {
  label: "Match Betting",
  img: matchBetting
};

export const Link3 = Template.bind({});
Link3.args = {
  label: "Coinflip",
  img: coinFlip
};
