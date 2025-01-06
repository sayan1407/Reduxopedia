import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const counter = useSelector((store) => store.counterStore.count)
  return (
    <div>{counter}</div>
  )
}

export default Counter