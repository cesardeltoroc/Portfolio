import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ResponsiveAppBar from './footer';
import Home from './home';
import Carousel from './carousel';
import Bio from './Bio'
// import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Bio/>
        <Carousel />
        {/* <Contact /> */}
        <ResponsiveAppBar />
      </div>
    );
  }
}

export default App;
