import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header: React.FC = () => {
  return (
    <Box
      height="100vh"
      backgroundSize="cover"
      backgroundImage="url('/images/robot.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      textAlign="center"
    >
      <Heading as="h1" color="white" size="lg">
        Selamat Datang Di Website Trash Stimik Handayani
      </Heading>
      <Button bg="#0AD05B" color="white" size="lg" mt="1rem">
        Tentang Kami
      </Button>
    </Box>
  )
}

export default Header
