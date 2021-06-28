import React from "react";
import { Story } from "@storybook/react";

import { Link } from "./Link";
import roulette from '../../assets/icons/roulette.svg';
import matchBetting from '../../assets/icons/matchBetting.svg';
import coinFlip from '../../assets/icons/coinFlip.svg';

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    onClick: { action: "clicked" },
  },
} ;

const Template= (args) => <Link {...args} />;

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
