import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import myImg  from "../assets/btc.png"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>

        <Stack direction={["column","row"]} alignItems={"center"}>
<VStack w={"full"} alignItems={["center","flex-start"]}>
    <Text fontWeight={"bold"}>About Me</Text>
    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>I am a MERN developer, and my name is Saksham Verma.</Text>

</VStack>
<VStack>
    <Avatar boxSize={"28"} mt={["4","0"]} src={myImg}/>
    <Text>Developer</Text>
</VStack>
        </Stack>
    </Box>
  )
}

export default Footer