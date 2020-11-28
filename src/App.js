import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
