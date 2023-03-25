import React, { useEffect, useState } from "react"

function NumberIncrementer() {
  let [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(++counter)
  }

  return (
    <div className="div-two-up">
      <h3>Use State - Number Incrementer</h3>
      {"\n"}
      {counter}
      <button onClick={increment}>Incrementer</button>
    </div>
  )
}

export default NumberIncrementer
