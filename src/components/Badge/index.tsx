import { Badge } from '@chakra-ui/react';
import * as React from 'react';

export interface BadgeProps {
    /** 
    * font size
    */ 
    fontSize?:string,
    colorScheme?:string ,
    variant?:'subtle'|'solid'|'outline'
}
 
const MyBadge: React.FC<BadgeProps> = (props) => {
const {children, ...rest}=props
    return ( <Badge {...rest}>{children || "Hello" }</Badge>);
}
 
export default MyBadge;