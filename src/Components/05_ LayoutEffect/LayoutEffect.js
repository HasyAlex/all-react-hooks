import React, { useEffect, useLayoutEffect } from "react"

//layout effect it is fundamentally called in a earlier stage of your page rendering than the use effect
//user effect only called after the stuff showed to us
function LayoutEffects() {
  useEffect(() => {
    console.log("useEffect")
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })
  return <></>
}

export default LayoutEffects
