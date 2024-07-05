import Hexagon from "./Hexagon";
import React from 'react'

export default function ({even}) {
    const hexagons = Array.from({ length: 7 });
  return (
    <div className={`flex ${even ? 'ml-[53px]' : ''}`}>
        {hexagons.map((_, index) => (
            <div key={index} className="m-1 my-0">
                <Hexagon />
            </div>
        ))}
    </div>
  )
}
