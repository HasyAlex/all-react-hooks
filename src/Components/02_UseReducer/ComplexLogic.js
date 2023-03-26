import React, { useEffect, useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }
      break
    case "SWITCHSTATE":
      return { count: state.count, showText: !state.showText }
      break
    default:
      return state
      break
  }
}

function ComplexLogic() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: "" })

  return (
    <div className="div-two-up">
      <h3>Use Reducer - ComplexLogic</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" })
          dispatch({ type: "SWITCHSTATE" })
        }}
      >
        Click Me I'll do more Tasks
      </button>
      {state.showText && <p>Hi and Bye {state.count}</p>}
    </div>
  )
}

export default ComplexLogic
