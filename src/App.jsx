import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import IngredientsSection from './Components/IngredientsSection'
import NewsSection from './Components/NewsSection'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeatureSection/>
      <IngredientsSection/>
      <NewsSection/>
      <Footer/>
    </div>
  )
}

export default App