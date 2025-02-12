import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
const queryclient = new QueryClient()
const clientId = "YOUR_GOOGLE_CLIENT_ID";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
    <Routes>
    <Route path='/*' element={
    <QueryClientProvider client={queryclient}>
       <GoogleOAuthProvider clientId={clientId}>
      <App />
      </GoogleOAuthProvider>
    </QueryClientProvider>
      }
       />
    </Routes>
    </Router>
  </React.StrictMode>
);

