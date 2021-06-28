import React from 'react';
import { Story } from '@storybook/react';

import { Input } from './Input';

import coins from '../../assets/icons/coins.svg'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} ;

const Template= (args) => <Input {...args} />;

export const Primary = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const iconInput = Template.bind({});
iconInput.args = {
  isIcon: true,
  iconName: coins
};