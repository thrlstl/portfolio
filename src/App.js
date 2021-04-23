import { useState, useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeContext from './contexts/ThemeContext'

function App() {

  const [isLight, setIsLight] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" theme={theme}>
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
