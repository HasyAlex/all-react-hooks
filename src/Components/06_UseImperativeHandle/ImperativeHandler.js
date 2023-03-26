import React, { useEffect, useRef, useState } from "react"
import Button from "./Button"

function UseImperativeHandler() {
  const buttonRef = useRef(null)

  return (
    <div className="div-two-up">
      <button
        onClick={() => {
          buttonRef.current.alertToggle()
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default UseImperativeHandler
