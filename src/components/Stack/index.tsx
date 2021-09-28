import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';

export interface Props{
    spacing:number,
    direction:"row"|"column",
    wrap:boolean,
    children:ReactJSXElement[],
    padding:"small"|"medium"|"large",
 
    
}


function Stack({ children, spacing = 2, direction = "row", wrap = true ,padding="medium"}:Props) {
    const style:React.CSSProperties = {
      display: "flex",
      gap: `${spacing * 0.25}rem`,
      flexWrap: wrap ? "wrap" : "nowrap",
      flexDirection: direction,
      padding:padding=="small" ? ".5em" : padding=="medium"?"1em":"1.5em",
      alignItems:"center",
      justifyContent:"center",
      border:"solid 3px blue",
    }

    return <div style={style}>{children}</div>
  }

  export default Stack