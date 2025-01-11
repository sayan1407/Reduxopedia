import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDestination } from '../../redux/slice/destinationSlice';
import { resetReduxopedia } from '../../redux/slice/actions/actions';

function ResetApp() {
    const dispatch = useDispatch();
    const resetCounterAndDestination = () => {
        
        dispatch(resetReduxopedia());
       
    }
  return (
    <div className='text-center'>
        <button className='btn btn-warning' onClick={resetCounterAndDestination}>Reset</button>
    </div>
  )
}

export default ResetApp;