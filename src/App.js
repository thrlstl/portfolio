import './scss/main.scss'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import SplashScreen from './components/SplashScreen'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ThemeContext from './contexts/ThemeContext'
import isTabletOrMobileContext from './contexts/isTabletOrMobileContext'

function App() {

  const [isLight] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
    }, 2000)
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
      <isTabletOrMobileContext.Provider value={isTabletOrMobile}>
        <div className="App" theme={theme}>
            {splashScreenVisible
            ? <SplashScreen />
            : <HomeStack />}
        </div>
      </isTabletOrMobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
