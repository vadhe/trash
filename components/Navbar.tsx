import { Box, Flex, Image, Link } from '@chakra-ui/react'
import * as React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
// import showHidden from 'utils/showHidden.ts';

const Navbar: React.FC = () => {
  const [showHidden, setShowHidden] = React.useState<string>('none')
  const handleShowHidden = () => {
    if (showHidden === 'none') {
      setShowHidden('block')
    } else {
      setShowHidden('none')
    }
  }

  return (
    <Box
      borderColor="gray.200"
      borderBottom="4px"
      borderStyle="solid"
      bg="#21313c"
      minH="1rem"
      paddingY="1rem"
      justifyItems="center"
      // px="1rem"
      d={{ base: 'block', md: ' flex' }}
    >
      <Flex justifyContent="space-between" mx="0.8rem">
        <Image src="/images/logo-trash.png" alt="logo" widht="30" height="30" />
        <Box onClick={handleShowHidden} display={{ base: 'block', md: 'none' }} cursor="pointer">
          <CgMenuGridO size={40} color="#fff" />
        </Box>
      </Flex>
      <Box display={{ base: showHidden, md: 'flex' }}>
        <Link marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
          Tentang Kami
        </Link>
        <Link marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
          Sejarah
        </Link>
        <Link marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
          Struktur Organisasi
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar
