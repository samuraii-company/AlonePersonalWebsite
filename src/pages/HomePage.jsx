import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import styled from 'styled-components'

function HomePage() {
  return (
      <Home>
        <Header />
        <Hero />
        <About />
      </Home>

  )
}

export default HomePage

const Home = styled.div`
    background: #111A20;
`