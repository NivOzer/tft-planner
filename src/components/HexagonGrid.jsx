import React from 'react'
import HexagonRow from './HexagonRow';

export default function HexagonGrid() {
    const rows = Array.from({ length: 4 });
  return (
    <div className="relative space-y-[-22px]"> 
        {rows.map((_, rowIndex) => (
            <HexagonRow key={rowIndex} even={rowIndex % 2 === 1} />
        ))}
    </div>
  )
}
