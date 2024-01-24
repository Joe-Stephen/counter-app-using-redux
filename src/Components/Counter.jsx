import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Correct import statement
import { increment, decrement, incrementByAmount, incrementAsync } from '../state/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value); // Access 'counter' slice from the state
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(incrementAsync(10))}>add value</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> 
      </div>
    </>
  );
}

export default Counter;