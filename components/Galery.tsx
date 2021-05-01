import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'react-elastic-carousel'

const Galery: React.FC = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 1 }
  ]
  return (
    <Box bg="#061621" my="6" px={{ md: 6, lg: 10 }}>
      <Box bg="#0c1c27" borderColor="#0c1c27" border="1px" borderRadius="sm" mx="auto" py="6">
        <Carousel isRTL={false} itemsToShow={1} showArrows={false} breakPoints={breakPoints}>
          <Img src="https://images.unsplash.com/photo-1619738756213-5abf56e67355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
          <Img src="https://images.unsplash.com/photo-1619738756213-5abf56e67355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
          <Img src="https://images.unsplash.com/photo-1619738756213-5abf56e67355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
        </Carousel>
      </Box>
    </Box>
  )
}

export default Galery
