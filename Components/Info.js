import React from 'react'

function Info() {
  return (
    <div className='px-8 font-Roboto'>

        <div className='flex items-center py-6'>
            <img src='https://i.postimg.cc/GpsNs0QG/camera-movie.png'/>
            <h2 className='text-header font-bold text-3xl ml-4'>Personajes</h2>
        </div>

        <div className='flex pb-6'>

            <div className='flex border-solid border border-gray-300 rounded-xl px-3 py-1 items-center'>
                <p className='text-header'>Total de personajes</p>
                <span className='text-gray-500 font-bold text-2xl ml-4'>75</span>
            </div>

            <div className='flex border-solid border border-gray-300 rounded-xl mx-4 px-3 py-1 items-center'>
                <img className='w-4 h-4 mx-1' src='https://i.postimg.cc/hP060VNj/Icono-de-vivo.png' />
                <p className='text-header'>Personajes vivos</p>
                <span className='text-header font-bold text-2xl ml-4'>22</span>
                <div className='h-6 border-l border-gray-500 border-solid mx-2 '></div>
                <img className='w-4 h-4 mx-1' src='https://i.postimg.cc/NGW3dgNy/Icono-de-muerto.png' />
                <p className='text-header'>Personajes muertos</p>
                <span className='text-header font-bold text-2xl ml-4'>0</span>
            </div>

            <div className='flex border-solid border border-gray-100 rounded-full items-center pl-4 bg-gray-100'>
                <img className='w-4 h-4 mr-2' src='https://i.postimg.cc/bYkZCvzW/Icono-de-busqueda.png' />
                <input className='outline-none bg-transparent text-gray-500 placeholder:text-gray-300 ' type='text' placeholder='Buscar'/>
            </div>

                      
        </div>
    </div>
  )
}

export default Info