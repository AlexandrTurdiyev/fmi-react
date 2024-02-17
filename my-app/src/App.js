import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/publications" Component={Publications} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App;
