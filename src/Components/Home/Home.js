import React from 'react'
import Counter from '../Counter/Counter'
import useCounter from '../useCounter/useCounter'

function Home() {
    const {currentVal, increment, decrement} = useCounter();
  return (
    <div>
        <Counter value={currentVal} increment={increment} decrement={decrement}/>
    </div>
  )
}

export default Home