
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

// import './App.css';

function App() {
  return (
   <div>
     <Nav></Nav>
     <Hero></Hero>
     <main>
      <Projects></Projects>
       <About></About>
       <Contact></Contact>
     </main>
   </div>
  );
}

export default App;