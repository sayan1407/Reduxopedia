import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementMultiplier,decrementMultiplier} from '../../redux/slice/counterSlice';

function Counter() {
  const counter = useSelector((store) => store.counterStore.count);
  const dispatch = useDispatch();
  const[multiplier,setMultiplier] = useState(0)
  return (
    <div className='mt-2 pt-3 pl-2 text-center' style={{borderTop:"1px solid #999"}}>
        <div className='text-white pb-2 h4'>Counter : {counter}</div>
        <div className='row'>
             <div className='p-4 col-12 col-md-6'>
                <div className='border p-4'>
                <h4 className='text-success pb-2'>Normal Counter</h4>
                    <button className='btn btn-primary' onClick={() => dispatch(increment())}>Add</button> &nbsp;
                    <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Remove</button>
                </div>
             </div>
             <div className='p-4 col-12 col-md-6'>
                <div className='border p-4'>
                    <h4 className='text-success pb-2'>Multiplier Counter</h4>
                    <div className='row'>
                        <div className='col-4 p-1'>
                            <input 
                            type='text' 
                            placeholder='Multiplier' 
                            className='form-control' 
                            value={multiplier}
                            onChange={(e) => setMultiplier(e.target.value)}/>
                        </div>
                        <div className='col-4 p-1'>
                            <button className='btn btn-primary form-control' onClick={() => dispatch(incrementMultiplier(multiplier))}>Add</button>
                        </div>
                        <div className='col-4 p-1'>
                            <button className='btn btn-danger form-control' onClick={() => dispatch(decrementMultiplier(multiplier))}>Remove</button>
                        </div>
                    </div>
                    
                    
                </div>
             </div>
        </div>
        
            
      
    </div>
  )
}

export default Counter