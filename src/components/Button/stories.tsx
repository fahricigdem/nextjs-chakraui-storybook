import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '.';
import {ButtonProps} from "."

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Large = Template.bind({});

Large.args={
  size:"lg"
}

export const Small = Template.bind({});

Small.args={
  size:"sm"
}

export const Blue = Template.bind({});

Blue.args={
  colorScheme:"blue"
}