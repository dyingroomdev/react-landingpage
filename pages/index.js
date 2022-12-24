import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={100}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whitealpha.500', 'whitealpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m A Full Stack Web Developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jewel Ahmed
          </Heading>
          <p>Web Developer, Digital Marketer, Security Consultant!</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whitealpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jewel.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Brief
        </Heading>
        <Paragraph>
        Jewel Ahmed is a Full Stack web developer and Digital Marketer with a passion for creating innovative online solutions. He has a strong background in computer science and a keen understanding of marketing strategies, which he uses to develop websites and applications that are both functional and visually appealing. With a proven track record of driving traffic, generating leads, and increasing conversions, Jewel is a valuable asset to any team. When he's not working, he enjoys staying active and exploring new technologies and marketing strategies.
        </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>19**</BioYear>
          Born in Dhaka, Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed my Higher Secondary exam.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          I left University and started to learn by my own.
        </BioSection>
        <BioSection>
          <BioYear>2016 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Like
        </Heading>
        <Paragraph>
          Heavy Metal Music, Gaming & Cooking.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/dyingroomdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub />}
              >
                @dyingroomdev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/dyinggroom" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoTwitter />}
              >
                @dyinggroom
              </Button>
            </Link>
          </ListItem>
    
          <ListItem>
            <Link href="https://www.linkedin.com/in/rihan-ahmed-jewel-96075519b/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B429d4187-af9c-4de0-8e44-ce12ce1272b4" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoLinkedin />}
              >
                @Rihan Ahmed Jewel
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
