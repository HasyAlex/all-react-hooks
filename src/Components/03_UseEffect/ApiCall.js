import axios from "axios"
import React, { useEffect, useState } from "react"

//useEffect call
//1). Everytime that the page rerendered
//2). When state chages

function ApiCall() {
  const [data, setData] = useState()
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email)
    })
    console.log("1st API call")
  }, [])

  const clickHandler = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email)
    })
    console.log("2ed API call")
  }, [count])

  return (
    <div className="div-two-up">
      <h3>Use Reducer - ComplexLogic</h3>
      {data}
      <button onClick={clickHandler}>Click me for + count</button>
      <h5>Count = {count}</h5>
    </div>
  )
}

export default ApiCall
