import React from 'react'
import { useSelector } from 'react-redux'

function Destination() {
    const destinationList = useSelector((store) => store.destinationStore.destinationList)
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
                    <button className='btn btn-success form-control m-1'>Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Destination