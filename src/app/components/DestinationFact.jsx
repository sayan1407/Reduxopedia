import React from 'react'
import { useSelector } from 'react-redux'


function DestinationFact() {
    const selectedDetination = useSelector((store)=>store.destinationStore.destinationSelected)
    console.log(selectedDetination)
    if(selectedDetination === undefined)
    {
        return(
            <div className='text-center p-4 text-warning'>Select a destination</div>
        )
    }
    else{
        return(
        <div className='text-center border p-3 m-3'>
            <h4 className='text-success'>{selectedDetination.name}</h4>
            Days Recommended : {selectedDetination.days} <br/>
            Fun Fact : {selectedDetination.fact}

        </div>
        )
    }
}

export default DestinationFact