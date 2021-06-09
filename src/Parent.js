import React, { useState } from "react"
import { getRandomColor } from "./randomColorGenerator.js"
import Child from "./Child"

function Parent() {
   const randomColor = getRandomColor()
   const [color, setColor] = useState(randomColor)

   return (
      <div className="parent" style={{ backgroundColor: color }}>
         <Child setter={setColor} />
         <Child setter={setColor} />
      </div>
   )
}

export default Parent
