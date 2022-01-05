
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Signup from './components/signup';
import Principles from './components/principles';
import Philosophy from './components/philosophy';
import Coaches from './components/coaches';
import Success from './components/success';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Login';



function App() {
  return (

    
    <Router>
      <div>
        <Nav />
        <Switch> 
          <Route exact path='/' component={Hero} />
          {/* <Route path='/home' component={Hero} /> */}
          <Route path='/projects' component={Projects} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' component={About} />
          <Route path='/principles' component={Principles} />
          <Route path='/philosophy' component={Philosophy} />
          <Route path='/coaches' component={Coaches} />
          <Route path='/success' component={Success} />
          
        </Switch>
        
        <main>
        </main>
      </div>
      </Router>
  );
}

export default App;