import type { NextPage } from 'next'

import { Container, Image } from 'semantic-ui-react';

import Header from '@/components/Header'
import Content from '@/components/Containers'
import Footer from '@/components/Footer'

import iconDevx from '@/assets/icon-devx.svg?url'

const Home: NextPage = () => {
  return (
    <div className="App">
      <Header />
      <Content>
        <Container text textAlign='center'>
          <Image src={iconDevx} centered size='tiny' style={{ marginBottom:"2em" }} alt='' />
          <p>Next.js App Ethereum DApp on Polygon</p>
          <p>Build your first app with Starter Kits</p>
          <p>Hello World</p>
        </Container>
      </Content>
      <Footer />
    </div>
  )
}

export default Home
