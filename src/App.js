import { useState, useEffect } from 'react'
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive'
import ThemeContext from './contexts/ThemeContext'
import isMobileContext from './contexts/isMobileContext'

function App() {

  const [isLight] = useState(false)
  const [theme, setTheme] = useState('dark')
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  return (
    <ThemeContext.Provider value={theme}>
      <isMobileContext.Provider value={isMobile}>
      <div className="App" theme={theme}>
        <Header />
        <Footer />
      </div>
      </isMobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
