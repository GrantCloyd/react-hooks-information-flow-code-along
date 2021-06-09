import React from "react"
import { getRandomColor } from "./randomColorGenerator.js"

function Child({ setter }) {
   return (
      <div
         className="child"
         onClick={() => setter(getRandomColor)}
         style={{ backgroundColor: "#FFF" }}
      />
   )
}

export default Child
