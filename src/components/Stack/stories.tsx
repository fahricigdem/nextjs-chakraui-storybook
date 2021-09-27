import Stack,{Props} from "."
import { Story, Meta } from '@storybook/react';


export default{
    title:"Stack",
    component:Stack,

} as Meta

const divStyle={ 
    width: "15vw",
    height: "15vh",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const Template:Story<Props>=({...args})=>{

    return(
        <Stack {...args}  >
            <div style={divStyle}>1</div>
            <div style={divStyle}>2</div>
            <div style={divStyle}>3</div>
            <div style={divStyle}>4</div>
            <div style={divStyle}>5</div>
</Stack>)}

export const Default=Template.bind({})





