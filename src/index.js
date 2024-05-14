import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './contexts/auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Permite o acesso ao contexto de autenticação em toda a palicação */}
        <BrowserRouter> {/* Permite a criação de rotas em toda a aplicação */}
            <App />
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

