import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';

export interface numberOfChildren{
    type:string,
    defaultValue:number
}

export interface Props{
    spacing:number,
    direction:"row"|"column",
    wrap:boolean,
    children:ReactJSXElement[],

}


function Stack({ children, spacing = 2, direction = "row", wrap = false }:Props) {
    const style:React.CSSProperties = {
      display: "flex",
      gap: `${spacing * 0.25}rem`,
      flexWrap: wrap ? "wrap" : "nowrap",
      flexDirection: direction,
    }
    return <div style={style}>{children}</div>
  }

  export default Stack