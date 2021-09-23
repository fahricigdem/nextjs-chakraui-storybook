import { Button } from '@chakra-ui/react';
import * as React from 'react';

export interface ButtonProps {
    
    size?:string,
    colorScheme?:string 
}
 
const MyButton: React.FunctionComponent<ButtonProps> = ({children, size="lg", colorScheme="teal"}) => {
    return ( <Button size={size} colorScheme={colorScheme} >{children || "Hello" }</Button>);
}
 
export default MyButton;