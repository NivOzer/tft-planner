import React from 'react'

export default function Hexagon() {
  return (
    <>
        <div className="relative w-[104px] h-[60px] bg-black">
            <div className="absolute top-[-30px] border-l-[52px] border-r-[52px] border-transparent border-b-[30px] border-b-black"></div>
            <div className="absolute bottom-[-30px] border-l-[52px] border-r-[52px] border-transparent border-t-[30px] border-t-black"></div>
        </div>
    </>
  )
}
