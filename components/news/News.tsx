import { Box, Heading, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import CardNews from './CardNews'

const News: React.FC = () => {
  return (
    <Box color="#fff" d="flex" justifyContent="center" flexDirection="column">
      <Heading as="h3" textAlign="center">
        Postingan
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} px="2" mt="6">
        <CardNews />
        <CardNews />
        <CardNews />
      </SimpleGrid>
      <Button
        colorScheme="blue"
        mt="4"
        w={{ base: '50%', md: '30%' }}
        mx="auto"
        bg="#0AD05B"
        _hover={{
          background: '#0AD05B',
          color: 'white'
        }}
        _active={{
          background: '#0AD05B',
          color: 'white'
        }}
      >
        Lihat Lainnya
      </Button>
    </Box>
  )
}

export default News
