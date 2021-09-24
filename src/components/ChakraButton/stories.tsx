import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button
};

export const Teal = () => <Button colorScheme="teal">Teal</Button>;

export const Red = () => <Button colorScheme="red">Red</Button>;

export const Large = () => (
  <Button size="lg" colorScheme="red" p="16">
    Large Red
  </Button>
);
