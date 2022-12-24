import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import computer from '../computer.js'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DyinGroom.xyz" />
        <meta name="author" content="Jewel Ahmed" />
        <meta name="author" content="DyinGroom" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="DyinGroom.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dyinggroom" />
        <meta name="twitter:creator" content="@dyinggroom" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="DyinGroom.xyz" />
        <meta name="og:title" content="DyinGroom.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>DyinGroom.xyz</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
