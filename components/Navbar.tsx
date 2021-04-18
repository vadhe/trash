import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <Box
      borderColor="gray.200"
      borderBottom="4px"
      borderStyle="solid"
      bg="#21313c"
      minH="1rem"
      paddingY="1rem"
      justifyItems="center"
      px="1rem"
    >
      <Flex w="full">
        <Image src="/images/logo-trash.png" alt="logo" widht="30" height="30" />
        <Link href="https://chakra-ui.com">About</Link>
        <Link href="https://chakra-ui.com">Sejarah</Link>
        <Link href="https://chakra-ui.com">Struktur Organisasi</Link>
      </Flex>
    </Box>
  )
}

export default Navbar
