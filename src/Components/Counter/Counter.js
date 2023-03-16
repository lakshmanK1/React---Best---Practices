import React from 'react'

function Counter(props) {
    const {value, increment, decrement} = props;
  return (
    <div>
        <button onClick={increment}> + </button>
        {value}
        <button onClick={decrement}> - </button>
    </div>
  )
}

export default Counter