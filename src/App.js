import logo from "./logo.svg"
import "./App.css"
import NumberIncrementer from "./Components/01_UseState/NumberIncrementer"
import TextUpdate from "./Components/01_UseState/TextUpdate"
import ComplexLogic from "./Components/02_UseReducer/ComplexLogic"
import ApiCall from "./Components/03_UseEffect/ApiCall"
import WorkWithRef from "./Components/04_UseRef/WorkWithRef"
import LayoutEffects from "./Components/05_ LayoutEffect/LayoutEffect"

function App() {
  return (
    <div>
      <NumberIncrementer></NumberIncrementer>
      <TextUpdate></TextUpdate>
      <ComplexLogic></ComplexLogic>
      <ApiCall></ApiCall>
      <WorkWithRef></WorkWithRef>
      <LayoutEffects></LayoutEffects>
    </div>
  )
}

export default App
