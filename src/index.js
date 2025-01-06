import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './app/components/Counter';
import Destination from './app/components/Destination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="text-white">
    <Provider store={store}>
       <Header/>
      <Counter/>
      <div className='p-4 border text-center'>
        <h4 className='text-success'>Detination List</h4>
        <Destination/>
      </div>
      
    </Provider>
    
  </div>
  
);
