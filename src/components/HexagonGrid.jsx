import React, { useState } from 'react'
import HexagonRow from './HexagonRow';

export default function HexagonGrid() {
    const [selectedIndex,setSelectedIndex] = useState(null);
    const handleHexagonClick = (index) => {
        setSelectedIndex(index);
    };

    const rows = Array.from({ length: 4 });
  return (
    <div className="relative space-y-[-22px]">
    {rows.map((_, rowIndex) => (
        <HexagonRow
            key={rowIndex}
            rowIndex={rowIndex}
            even={rowIndex % 2 === 1}
            selectedIndex={selectedIndex}
            onClickHexagon={handleHexagonClick}
        />
    ))}
</div>
  )
}
