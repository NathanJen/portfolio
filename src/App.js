import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Journey from './components/Journey/Journey'
import FilmFestival from './components/Projects/FilmFestival'
import LittleLeague from './components/Projects/LittleLeague'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/journey' component={Journey} />
        <Route exact path='/work/cmu-iff' component={FilmFestival} />
        <Route exact path='/work/little-league' component={LittleLeague} />
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
