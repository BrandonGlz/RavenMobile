import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navegation from './components/Navegation';

const App = () => {
  return (
    <Router>
      <Navegation />
    </Router>
  );
};

export default App;