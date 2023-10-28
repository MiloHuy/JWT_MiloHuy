import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './app/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <BrowserRouter>
          <Routes>
            <Route path = '/*' element={<App />}/>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
);
