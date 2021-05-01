import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '~/components/Navbar'
import Header from '~/components/Header'
import Galery from '~/components/Galery'
import News from '~/components/news/News'
import Footer from '~/components/Footer'

const IndexPage: NextPage = () => (
  <Box bg="#061621">
    <Navbar />
    <Header />
    <Galery />
    <News />
    <Footer />
  </Box>
)

export default IndexPage
