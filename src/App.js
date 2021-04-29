import './scss/main.scss'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Switch, Route } from 'react-router-dom';

import SplashScreen from './components/SplashScreen'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ResumePage from './components/pages/ResumePage'

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
          <Switch>
              <Route exact path='/' component={AboutPage}/>
              <Route exact path='/about' component={AboutPage}/>
              <Route exact path='/contact' component={ContactPage}/>
              <Route exact path='/projects' component={ProjectsPage}/>
              <Route exact path='/resume' component={ResumePage}/>
          </Switch>
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
