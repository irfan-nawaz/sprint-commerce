import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar/Navbar'
import Grid from './Components/Grid/Grid'
import Hero from './Components/Hero/Hero'
import Mission from './Components/Mission/Mission'
import Featured from './Components/Featured/Featured'

export default function Home() {
  return (
    <>
      <NavBar />
      <Mission />
      <div
        style={{
          backgroundColor: 'black',
          border: '20px solid white',
          borderRadius: '30px',
        }}
      >
        <Hero />
      </div>
      {/* <Featured /> */}
      <Grid />
    </>
  )
}
