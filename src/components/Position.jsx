import React from 'react'
import HexagonGrid from './HexagonGrid'

export default function Position() {
  return (
    <div className='border-solid border-white border-2 '>
        <div className='pb-8 px-8'>
        <h1 className='font-semibold p-8 text-white'>Position</h1>
        <HexagonGrid/>
        </div>
    </div>
  )
}
