import React from 'react';
import { Story} from '@storybook/react';
import { Meta } from '@storybook/react';

import {Stack,Text, Box, Button, Image} from "@chakra-ui/react";
import Link from "next/link";

import { useColorMode } from "@chakra-ui/react";

import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export default {
  title: 'Chakra/Card',
} as Meta;

export interface CardProps {
    /** 
    * font size
    */ 
     photoUrl?:string,
     manufacturer?:string ,
     model?:string,
     location?:string,
     price?:string ,
     id?:string,
     bgLight?:string,
     bgDark?:string,
   
}

const Template: Story<CardProps> = (args) => {
    const {photoUrl,manufacturer,model,location,price,id,bgLight="gray.200",bgDark="gray.700"}=args

    const { colorMode } = useColorMode();
    const bgColor = { light: bgLight, dark: bgDark };
    const textColor = { light: "blue.900", dark: "blue.200" };
    return(
<LinkBox cursor="pointer" className="my-box">
      <Stack
        direction={["column","row"]}
        //w={["80vw", "45vw", "25vw", "18vw"]}
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor[colorMode]}
        boxShadow="dark-lg"
        _hover={{
          transform: "scale3d(1.05, 1.05, 1)",
          transition: "0.5s",
        }}
      >
        {/* <Image
        loader={() => turbine.photoUrl}
        unoptimized
        src={turbine.photoUrl}
        width={250}
        height={250}
        alt="Windturbine"
      /> */}

        <Image
          //boxSize={["350px", "400px", "350px", "300px"]}
          boxSize={["80vw", "45vw", "25vw", "25vw"]}
          objectFit="cover"
          src={photoUrl}
          fallbackSrc="https://avatars.githubusercontent.com/u/64100513?s=400&u=b80cfe42c0f6ec104df664617895638bc5a058cf&v=4"
        />

        <Box
          p="4"
          maxW="250"
          color={textColor[colorMode]}
          w={["80vw", "45vw", "25vw", "18vw"]}
          // sx={{
          //   ".my-box:hover &": {
          //     color: "red.600",
          //   },
          // }}
        >
          {/* <Badge colorScheme="red" position="absolute" top="6" right="4"> 
            New
          </Badge>*/}
          <Text my="1">Manufacturer:{manufacturer}</Text>
          <Text my="1">Model: {model}</Text>
          <Text my="1">Location: {location}</Text>
          <Text my="1">Price:{price}</Text>
          <Link href={"/" + id}>
            <LinkOverlay>
              <Button
                colorScheme="green"
                width="100%"
                variant="outline"
                mt="3"
                //onClick={showDetailsHandler} // Anstatt Link zu benutzen kann mann useRoute()
              >
                see details
              </Button>
            </LinkOverlay>
          </Link>
        </Box>
      </Stack>
    </LinkBox>
    )
}

export const Default = Template.bind({});

Default.args={
    manufacturer:"Bosch",
    photoUrl:"",
    model:"U/42z4",
    location:"Hannover",
    price:"1000$" ,
    id:"",
    bgLight:"teal.200",
    bgDark:"teal.800",
  }


  export const Blue = Template.bind({});

Blue.args={
    manufacturer:"Arcelik",
    photoUrl:"",
    model:"K/42z4",
    location:"Bonn",
    price:"2000$" ,
    id:"",
    bgLight:"blue.200",
    bgDark:"blue.800",
  }

  export const Yellow = Template.bind({});

  Yellow.args={
    ...Blue.args,
    bgLight:"yellow.200",
    bgDark:"yellow.800",
  }

