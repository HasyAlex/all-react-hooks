import React, { useEffect, useRef } from "react"

function WorkWithRef() {
  const inputRef = useRef(null)

  const onClickClear = () => {
    inputRef.current.value = ""
  }

  const onClickFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="div-two-up">
      <h3>InputRef</h3>
      <input type="text" placeholder="Enter Values" ref={inputRef}></input>
      <button onClick={onClickClear}>Clear Value</button>
      <button onClick={onClickFocus}>Focus</button>
    </div>
  )
}

export default WorkWithRef
