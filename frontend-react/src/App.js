import './App.scss';
import {About, Header, Footer, Work, Skills, Testimonials} from './container';
import {Navbar} from './components'

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonials/>
    <Footer/>
    </div>
  );
};

export default App;
