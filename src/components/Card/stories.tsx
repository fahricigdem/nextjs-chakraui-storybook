//import React from 'react';
import { Story} from '@storybook/react';
import { Meta } from '@storybook/react';
import Card from '.';
import {CardProps} from "."

export default {
  component: Card,
  title: 'Components/Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({});

Default.args={
  id:"https://stackoverflow.com/questions/35074365/typescript-interface-default-values",
}

export const Red = Template.bind({});

Red.args={
      /** 
    font size
    */ 
    photoUrl:"",
    manufacturer:"noname" ,
    model:"noname",
    location:"noname",
    price:"noname" ,
    id:"noname",
    bgLight:"red.200",
    bgDark:"red.900",
}


