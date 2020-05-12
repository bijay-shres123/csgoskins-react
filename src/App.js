import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

