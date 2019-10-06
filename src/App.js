import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.css';

// Components
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
