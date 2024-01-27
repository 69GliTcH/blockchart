import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import etSrc from "../assets/et.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"full"} >
      <motion.div style={{
        height:"80vh",
      }}
      animate={{
        translateY:"30px",
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}
      >
      <Image w={"full"} h={"70vh"} objectFit={"contain"} src={etSrc} />

      </motion.div>

      <Text fontSize={"4xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-70px"}>BlockChart</Text>
    </Box>
  )
}

export default Home