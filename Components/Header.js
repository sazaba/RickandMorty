import React from 'react'

function Header() {
  return (
    <div className='flex justify-between px-8 py-2 bg-header text-white'>
      <div>
          <img src='https://i.postimg.cc/KzrjDHNs/Logo-Rand-M.png'/>
      </div>
      <div className='flex w-20 items-center justify-around'>
        <img className='w-4 h-4 space-x-5' src='https://i.postimg.cc/4xgJB5YD/Home.png'/>
        <img className='w-4 h-4  space-x-5' src='https://i.postimg.cc/02JRgwg9/Icono-de-campana.png'/>
      </div>
      
    </div>
  )
}

export default Header