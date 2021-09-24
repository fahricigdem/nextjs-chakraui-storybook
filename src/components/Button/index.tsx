import { Button } from '@chakra-ui/react';
import * as React from 'react';

export interface ButtonProps {
    
    size?:string,
    colorScheme?:string 
}
 
const MyButton: React.FunctionComponent<ButtonProps> = (props) => {
    const {children,...rest}=props
    return ( 
        <Button {...rest}>{children || "Hello" }</Button>
    );
}
 
export default MyButton;