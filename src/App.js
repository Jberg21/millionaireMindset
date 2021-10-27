
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

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