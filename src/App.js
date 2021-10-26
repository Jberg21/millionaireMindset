
import nav from './components/nav';
import hero from './components/hero';
import about from './components/about';
import projects from './components/projects';
import contact from './components/contact';

// import './App.css';

function app() {
  return (
   <div>
     <nav></nav>
     <hero></hero>
     <main>
       <about></about>
       <projects></projects>
       <contact></contact>
     </main>
   </div>
  );
}

export default app;