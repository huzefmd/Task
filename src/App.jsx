import React, { useState } from 'react'

//Custom Hooks
function useCounter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  }
  return {
    count: count,
    increment:increment
  }
  
}

//App Component
function App() {
  const { count, increment } = useCounter();

  return (
    <div>
      <button  className='border-2 p-3 ' onClick={increment}>Counter {count }</button>
    </div>
  )
}

export default App
