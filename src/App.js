import logo from "./logo.svg"
import "./App.css"
import NumberIncrementer from "./Components/01_UseState/NumberIncrementer"
import TextUpdate from "./Components/01_UseState/TextUpdate"
import ComplexLogic from "./Components/02_UseReducer/ComplexLogic"

function App() {
  return (
    <div>
      <NumberIncrementer></NumberIncrementer>
      <TextUpdate></TextUpdate>
      <ComplexLogic></ComplexLogic>
    </div>
  )
}

export default App
