import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box bg="#21313c" textAlign="center" mt="6" py="6" color="white">
      {/* <Img w="60px" h="40px" src="images/logo-trash.png" /> */}
      <Text>&copy; Trash Handayani Makassar 2021</Text>
      {/* <Text>Develop by Vadhe</Text> */}
    </Box>
  )
}

export default Footer
