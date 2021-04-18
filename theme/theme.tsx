import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        marginX: '1rem',
        color: '#ffff',
        textDecoration: 'none'
      }
    }
  }
})

export default theme
