import React, { useEffect, useState } from "react"

function TextUpdate() {
  const [inputValue, setInputValue] = useState()

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <div className="div-two-up">
      <h3>Use State - Text Update</h3>
      <input placeholder="Enter The Word" onChange={onChange}></input>
      {"\n"}
      {inputValue}
    </div>
  )
}

export default TextUpdate
