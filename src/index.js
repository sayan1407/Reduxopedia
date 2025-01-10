import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './app/components/Counter';
import Destination from './app/components/Destination';
import DestinationFact from './app/components/DestinationFact';
import ResetApp from './app/components/ResetApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="text-white">
    <Provider store={store}>
       <Header/>
       <ResetApp/>
      <Counter/>
      <div className='p-4 border text-center'>
        <h4 className='text-success'>Detination List</h4>
        <Destination/>
        <DestinationFact/>
      </div>
      
    </Provider>
    
  </div>
  
);
