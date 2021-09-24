//import React from 'react';
import { Story} from '@storybook/react';
import { Meta } from '@storybook/react';
import Badge from '.';
import {BadgeProps} from "."

export default {
  component: Badge,
  title: 'Components/Badge',
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Template.bind({});

// Default.args={
//   fontSize:"md",
// }




export const Small = Template.bind({});

Small.args={
      /** 
    font size
    */ 
  fontSize:"sm"
}

export const Medium = Template.bind({});

Medium.args={
  fontSize:"md"
}

export const Large = Template.bind({});

Large.args={
  fontSize:"lg"
}

export const Teal = Template.bind({});

Teal.args={
  colorScheme:"teal"
}

export const Outline = Template.bind({});

Outline.args={
  variant:"outline"
}

export const Solid = Template.bind({});

Solid.args={
  variant:"solid"
}