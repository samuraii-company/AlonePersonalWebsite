import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import styled from 'styled-components'
import Stack from '../components/Stack'
import Offers from '../components/Offers'

function HomePage() {
  return (
      <Home>
        <Header />
        <Hero />
        <About />
        <Stack />
        <Offers />
      </Home>

  )
}

export default HomePage

const Home = styled.div`
    background: #111A20;
`