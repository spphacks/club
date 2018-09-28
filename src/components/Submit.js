import React from 'react'
import { Heading, Label, Input, Button } from '@hackclub/design-system'
import Bar from './Bar'
import Columns from './Columns'
import Column from './Column'

const Submit = () => (
  <section id="submit">
    <Bar />
    <Heading.h2 f={4}>Submit</Heading.h2>
    <form action="https://formspree.io/techboss302@gmail.com" method="POST">
      <Columns>
        <Column>
          <Label>
            Email
            <Input type="email" name="email" placeholder="abc@scasd.org" />
          </Label>
        </Column>
        <Column>
          <Label>
            Link
            <Input type="url" name="url" placeholder="abc.xyz" />
          </Label>
        </Column>
        <Column style={{ alignSelf: 'flex-end' }}>
          <Button.input type="submit" />
        </Column>
        <Column />
      </Columns>
    </form>
  </section>
)

export default Submit
