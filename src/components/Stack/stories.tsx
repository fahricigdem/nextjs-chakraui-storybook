import Stack,{Props} from "."
import { Story, Meta } from '@storybook/react';

export default{
    title:"Stack",
    component:Stack,
} as Meta

const Template:Story<Props>=({...args})=>{

    return(
        <Stack {...args}  >
            <div style={divStyle}>1</div>
            <div style={divStyle}>2</div>
            <div style={divStyle}>3</div>
            <div style={divStyle}>4</div>
            <div style={divStyle}>5</div>
        </Stack>
)}

export const Wrap=Template.bind({})

export const NoWrap=Template.bind({})

NoWrap.args={
    //...Blue.args,
    wrap : false,
  }

  export const Column=Template.bind({})

Column.args={
    //...Blue.args,
    direction : "column",
  }



////style for div

const divStyle:React.CSSProperties={ 
    width: "18em",
    height: "15vh",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:"3%",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",

}