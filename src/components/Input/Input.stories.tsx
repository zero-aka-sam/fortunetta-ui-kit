import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input,InputProps } from './Input';

import coins from '../../assets/icons/coins.svg'

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

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