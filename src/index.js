import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import { Provider } from 'react-redux';
import { store } from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
       <Header/>

    </Provider>
    
  </div>
  
);
