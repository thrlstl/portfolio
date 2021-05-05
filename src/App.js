import './scss/main.scss'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import SplashScreen from './components/SplashScreen'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageContainer from './components/pages/PageContainer'
import CurrentPage from './components/pages/CurrentPage'

import ThemeContext from './contexts/ThemeContext'
import isTabletOrMobileContext from './contexts/isTabletOrMobileContext'

function App() {

  const [toggle] = useState(true)
  const [theme, setTheme] = useState('dark')
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    setTheme(() => {
      return toggle
        ? 'dark'
        : 'light'
    })
  }, [toggle])

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false)
    }, 2000)
  }, [])

  function HomeStack() {

    const [isPageExpanded, setIsPageExpanded] = useState(false)

    return (
      <>
        <Header />
        <PageContainer isPageExpanded={isPageExpanded}>
          <CurrentPage />
        </PageContainer>
        <Footer setIsPageExpanded={setIsPageExpanded} />
      </>
    )
  }

  return (
    <ThemeContext.Provider value={theme}>
      <isTabletOrMobileContext.Provider value={isTabletOrMobile}>
          <div className="App" theme={theme}>
            { splashScreenVisible
              ? <SplashScreen />
              : <HomeStack /> }
          </div>
      </isTabletOrMobileContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
