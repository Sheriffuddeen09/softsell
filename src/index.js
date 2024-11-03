import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryclient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
    <Routes>
    <Route path='/*' element={
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
      }
       />
    </Routes>
    </Router>
  </React.StrictMode>
);

