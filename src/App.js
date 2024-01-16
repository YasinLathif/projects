import './App.css';
import ErrorBoundary from './containers/shared/ErrorBoundary';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './/Pages/Home/Home';
import About from './/Pages/About/About';
import Projects from './/Pages/Projects/Projects';
import Contact from './/Pages/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <main className='container-lg' id='mainSection'>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
