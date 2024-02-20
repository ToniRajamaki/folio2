import React, { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills2 from './components/Skills2'
import Skills from './components/Skills'
import Services from './components/Services'
import Qualifications from './components/Qualifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
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
          {/* <Services theme={theme} /> */}
          {/* <About theme={theme} /> */}
          <Skills2 theme={theme}/>
          <Education></Education>
          <Qualifications theme={theme} />
          <Portfolio theme={theme} />
          {/* <Testimonials theme={theme} /> */}
          {/* <Contact theme={theme} /> */}
        </main>
        <Footer theme={theme} />
        {window.innerWidth > 1000 && <ScrollUp />}
      </div>
    </ThemeContext.Provider>
  )
}

export default App