import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App/index.css';
import { App } from './components/App/App';
import Theme from './components/Theme/theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
