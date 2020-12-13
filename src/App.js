import React, { useState } from "react"
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Journey from './components/Journey/Journey'
import FilmFestival from './components/Projects/FilmFestival'
import LittleLeague from './components/Projects/LittleLeague'
import MuddyPaws from './components/Projects/MuddyPaws'
import ThemeContext from './contexts/theme'

function App() {
  const [theme, toggleTheme] = useState("light")
  const value = { theme, toggleTheme }

  return (
    <div className={`app ${theme === 'dark' && 'dark'}`}>
      <ThemeContext.Provider value={value}>
        <Header />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Journey} />
          <Route exact path='/work/cmu-iff' component={FilmFestival} />
          <Route exact path='/work/little-league' component={LittleLeague} />
          <Route exact path='/work/muddy-paws' component={MuddyPaws} />
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
