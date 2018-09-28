import React from 'react'
import Logo from './Logo'
import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Button,
  Badge
} from '@hackclub/design-system'
import Calendar from './Calendar'
import data from '../data.json'

const Header = () => (
  <Box pt={[4, 5]}>
    <Logo size={72} />
    <Flex align="center" mb={3} wrap>
      <Link href="https://hackclub.com" mr={3}>
        <Heading.h1 color="primary" f={6}>
          Hack Club
        </Heading.h1>
      </Link>
      <Badge>Saint Peter's Prep</Badge>
    </Flex>
    <Text f={[3, 4]}>{data.description}</Text>
    <Button
      bg="accent"
      mt={3}
      mb={4}
      href="https://hackclub.com"
      target="_blank"
      children="Learn more"
    />
    <Flex align="center">
      <Calendar month={data.meeting.month} day={data.meeting.day} />
      <Box align="left" ml={3}>
        <Text>
          <strong>Next meeting</strong>
        </Text>
        <Text>MSC 315, 3:00–4:15pm</Text>
      </Box>
    </Flex>
  </Box>
)

export default Header
