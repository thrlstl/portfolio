import './scss/main.scss'
import { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import { useMediaQuery } from 'react-responsive'
import ThemeContext from './contexts/ThemeContext'
import isMobileContext from './contexts/isMobileContext'

function App() {

  const [isLight] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

  useEffect(() => {
    setTheme(() => {
      return isLight
        ? 'light'
        : 'dark'
    })
  }, [isLight])

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false)
    }, 1500)
  }, [])

  function HomeStack() {
    return(
      <>
      <Header />
      <Footer />
      </>
    )
  }

  return (
    <ThemeContext.Provider value={theme}>
      <isMobileContext.Provider value={isMobile}>
      <div className="App" theme={theme}>
      {splashScreenVisible
      ? <SplashScreen />
      : <HomeStack />}
      </div>
      </isMobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
