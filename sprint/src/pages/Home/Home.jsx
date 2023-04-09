import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar/Navbar'
import Grid from './Components/Grid/Grid'
import Hero from './Components/Hero/Hero'
import Mission from './Components/Mission/Mission'
import Featured from './Components/Featured/Featured'

export default function Home() {
  const details = [
    {
      id: 1,
      name: 'Fitness',
    },
    {
      id: 1,
      name: 'Sport',
    },
    {
      id: 3,
      name: 'Track',
    },
  ]
  return (
    <>
      <NavBar />
      <Hero />
      <Mission />
      <Featured />
      <Grid details="fitnes" />
    </>
  )
}
