import Hexagon from "./Hexagon";
import React from 'react'

export default function 
() {
    const hexagons = Array.from({ length: 7 });
  return (
    <div className="flex">
        {hexagons.map((_, index) => (
            <div key={index} className="m-[1px]">
                <Hexagon />
            </div>
        ))}
    </div>
  )
}
