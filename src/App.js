import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'
import TestProject from './components/TestProject'
import HomePage from './HomePage'
import './styles/load.css'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router basename='/folio2'>
        {' '}
        {/* Add the basename prop */}
        <main className='main'>
          <Routes>
            <Route path='/' element={<HomePage theme={theme} />} />
            <Route path='/project' element={<TestProject />} />
          </Routes>
        </main>
        {window.innerWidth > 1000 && <ScrollUp />}
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
