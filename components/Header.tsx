import { Box, Button, Heading } from '@chakra-ui/react'
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
      <Heading as="h1" color="white" size="lg" w={{ lg: '50%' }} px="2" mx="auto" pt="6" mb="4">
        Selamat Datang Di Website Trash (tim Robotika STMIK Handayani Makassar)
      </Heading>
      <Button
        bg="#0AD05B"
        _hover={{
          background: '#0AD05B',
          color: 'white'
        }}
        _active={{
          background: '#0AD05B',
          color: 'white'
        }}
        color="white"
        size="lg"
        mt="1rem"
      >
        Tentang Kami
      </Button>
    </Box>
  )
}

export default Header
