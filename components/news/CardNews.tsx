import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CardNews: React.FC = () => {
  return (
    <Box bg="#0c1c27" p={{ base: '6', lg: '16' }} border="1px" boxShadow="dark-lg" borderColor="#0c1c27" borderRadius="sm">
      <Heading as="h4" fontSize="md">
        My Sehat negeriku app is not working anymore
      </Heading>
      <Text fontSize="md" mt="4">
        Remember Sehat Negeriku Redesign and Rebuild?
      </Text>
    </Box>
  )
}

export default CardNews
