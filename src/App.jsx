import { useState } from 'react'
import HeroBanner from './components/HeroBanner'
import BodyContent from './components/BodyContent'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>My Portfolio | Regaspi, Luwie E.</title>
      
      <HeroBanner />
      <BodyContent />
      <FAQ />
      <Footer />
    </>
  )
}

export default App