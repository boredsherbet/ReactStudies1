import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './assets/data.js'
function App() {
  const cards = data.map((card) => {
    return <Card 
    key={card.id} 
    {...card}
    > </Card>
  })
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}
export default App
