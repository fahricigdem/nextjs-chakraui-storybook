import { Button } from '@chakra-ui/react';
import * as React from 'react';

export type ButtonProps= {
      /**
   * Is this the principal call to action on the page?
   */
    size?:string,
    colorScheme?:string 
}

/**
 * Primary UI component for user interaction
 */
const MyButton: React.FunctionComponent<ButtonProps> = ({children,size="md",colorScheme}) => {
    //const {children,...rest}=props
    return ( 
        <Button size={size} colorScheme={colorScheme}>{children || "Hello" }</Button>
    );
}
 
export default MyButton;