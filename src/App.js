import React, { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Qualifications from './components/Qualifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'
import Work from './components/Work'
import EducationCard from './components/EducationCard'
import './styles/load.css'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [completed, setCompleted] = useState(undefined)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className='main'>
          <Home theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <EducationCard
            schoolName='Tampere University'
            degree='Masters in CS'
            duration='2018-2023'
            description='There was so much coding'
            imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOseqgHwSg_KeYaOXu4-xQr_ZDTF98GJmTg&usqp=CAU'
          ></EducationCard>
          <Services theme={theme} />
          <Qualifications theme={theme} />
          <Work theme={theme} />
          <Testimonials theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
        <ScrollUp theme={theme} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
