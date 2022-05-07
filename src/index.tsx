import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
