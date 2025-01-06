import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destinatonClicked } from '../../redux/slice/destinationSlice';

function Destination() {
    const destinationList = useSelector((store) => store.destinationStore.destinationList);
    const dispatch = useDispatch()
  return (
    <div>
        {destinationList.map((d,index) => (
            <div
             className='text-center text-white row'
             style={{borderBottom : "1px solid #333"}}
             key={index}
             >
                <div className='col-8 col-md-3 offset-md-3 pt-2'>{d.name}</div>
                <div className='col-4 col-md-2'>
                    <button className='btn btn-success form-control m-1' onClick={() => dispatch(destinatonClicked(d))}>Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Destination