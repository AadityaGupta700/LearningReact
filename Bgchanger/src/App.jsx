import React, { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red-500')
  let a=(col)=>{
    setColor(col)
  }
  return (
    <div className={`bg-${color} flex justify-center duration-700 items-end  h-screen`}>
      <div className='flex p-10 text-white cursor-pointer bg-teal-200 rounded-lg mb-10 '>
        <div onClick={()=>a('red-500')} className='px-5 mx-2 bg-red-500'>Red</div>
        <div onClick={()=>a('white')} className='px-5  mx-2 bg-white'>White </div>
        <div onClick={()=>a('yellow-500')} className='px-5 mx-2  bg-yellow-500'>Yellow</div>
        <div onClick={()=>a('orange-500')} className='px-5 mx-2  bg-orange-500'>Orange</div>
        <div onClick={()=>a('green-500')} className='px-5 mx-2  bg-green-500'>Green</div>
        <div onClick={()=>a('black')} className='px-5 mx-2 text-white bg-black'>Black</div>
        <div onClick={()=>a('blue-500')} className='px-5 mx-2  bg-blue-500'>Blue</div>
        <div onClick={()=>a('purple-500')} className='px-5 mx-2  bg-purple-500'>Lavender</div>
        <div onClick={()=>a('gray-500')} className='px-5 mx-2  bg-gray-500'>Gray</div>
        <div onClick={()=>a('orange-950')} className='px-5 mx-2  bg-orange-950'>WOOD</div>
      </div>
    </div>
   
  )
}

export default App