import Hexagon from "./Hexagon";
import React from 'react'

export default function ({ even, rowIndex, selectedIndex, onClickHexagon }) {
    const hexagons = Array.from({ length: 7 });
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSA9yIIntc7TMdKWSfOtNY-gIJK777wbrMQ9D1lsdKndf99Pl9mFLBnWUcrBMvTYaszB8&usqp=CAU'
    return (
      <div className={`flex ${even ? 'ml-[53.5px]' : ''}`}>
          {hexagons.map((_, index) => {
              const hexIndex = rowIndex * 7 + index; // turn the hexes to 1D array for calculations
              const isSelected = hexIndex === selectedIndex;
              return (
                <div key={index} className="m-1 my-0 cursor-pointer" onClick={() => onClickHexagon(hexIndex)}>
                      <Hexagon id={hexIndex} image={isSelected ? imageUrl : null} />
                  </div>
              );
          })}
      </div>
  );
}
