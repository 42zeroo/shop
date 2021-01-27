import React from 'react';
import Navbar from './components/navbar/Navbar'
import Content from './components/Content'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faInfoCircle, faShoppingCart, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus, faInfoCircle, faShoppingCart, faMinusCircle);

function App() {
  return (
    <div className="app">
    <Router >
        <Navbar />
        <Content />
    </Router>
    </div>

  );
}

export default App;
