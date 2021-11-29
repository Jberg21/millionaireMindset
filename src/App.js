
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Signup from './components/signup';
import Principles from './components/principles';
import Philosophy from './components/philosophy';
import Coaches from './components/coaches';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Login';

// import './App.css';

function App() {
  return (
  
      <div>
        <Nav />
         {/* <Switch>
           <Route path="/Login">
           </Route>
         </Switch> */}
        <Hero></Hero>
        <main>
          <Projects></Projects>
          <About></About>
          <Principles></Principles>
          <Philosophy></Philosophy>
          <Signup></Signup>
          <Coaches></Coaches>
        </main>
      </div>

  );
}

export default App;