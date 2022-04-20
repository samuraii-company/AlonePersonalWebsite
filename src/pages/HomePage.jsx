import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import styled from 'styled-components'
import Stack from '../components/Stack'
import Offers from '../components/Offers'
import RecentWorks from '../components/RecentWorks'
import Contact from '../components/Contact'

function HomePage() {
  return (
      <Home>
        <Header />
        <Hero />
        <About />
        <Stack />
        <Offers />
        <RecentWorks />
        <Contact />
      </Home>

  )
}

export default HomePage

const Home = styled.div`
    background: #111A20;
`