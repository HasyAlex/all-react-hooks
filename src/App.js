import logo from "./logo.svg"
import "./App.css"
import NumberIncrementer from "./Components/01_UseState/NumberIncrementer"
import TextUpdate from "./Components/01_UseState/TextUpdate"
import ComplexLogic from "./Components/02_UseReducer/ComplexLogic"
import ApiCall from "./Components/03_UseEffect/ApiCall"
import WorkWithRef from "./Components/04_UseRef/WorkWithRef"
import LayoutEffects from "./Components/05_ LayoutEffect/LayoutEffect"
import UseImperativeHandler from "./Components/06_UseImperativeHandle/ImperativeHandler"

function App() {
  return (
    <div>
      {/* 01_UseState */}
      <NumberIncrementer></NumberIncrementer>
      <TextUpdate></TextUpdate>
      {/* 02_UseReducer */}
      <ComplexLogic></ComplexLogic>
      {/* 03_UseEffect */}
      <ApiCall></ApiCall>
      {/* 04_UseRef */}
      <WorkWithRef></WorkWithRef>
      {/* 05_ LayoutEffect */}
      <LayoutEffects></LayoutEffects>
      {/* 06_UseImperativeHandle */}
      <UseImperativeHandler></UseImperativeHandler>
    </div>
  )
}

export default App
