import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDestination } from '../../redux/slice/destinationSlice';
import { resetCounter } from '../../redux/slice/counterSlice';

function ResetApp() {
    const dispatch = useDispatch();
    const resetCounterAndDestination = () => {
        console.log("Hi")
        dispatch(resetDestination());
        dispatch(resetCounter());
    }
  return (
    <div className='text-center'>
        <button className='btn btn-warning' onClick={resetCounterAndDestination}>Reset</button>
    </div>
  )
}

export default ResetApp;