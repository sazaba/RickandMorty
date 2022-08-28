import React from 'react'

function Characters({characters}) {

     const apiDate = (date)=>{
        let dateCreation = date;
        let timestamp = new Date(dateCreation).getTime();
        let Day = new Date(timestamp).getDate();
        let Month = new Date(timestamp).getMonth() + 1;
        let Year = new Date(timestamp).getFullYear();
        let newDateFormat = `${Day}/${Month}/${Year}`;
        return newDateFormat
     }

  return (
    <div className='mx-8  border border-solid border-gray-100 rounded-xl shadow-xl font-Roboto'>

    <table className='flex flex-col p-6 '>

       <tr className='flex justify-around bg-gris text-white px-4 py-3 rounded-t-lg mb-4'>
         <th >Nombre</th>
         <th >Vivo</th>
         <th >Especie</th>
         <th >Genero</th>
         <th >Origen</th>
         <th >Locación</th>
         <th >Capitulos</th>
         <th >Fecha</th>
         <th >Acciones</th>
       </tr>
       
       {
        characters.map((item, index)=>(
        <tr key={index} className='flex justify-around text-sm px-4 py-3 text-header items-center'>

       <td className='w-1/12'>{item.name}</td> 

       {
         (item.status == 'Alive')? <td><img className='w-4 h-4 mx-7' src='https://i.postimg.cc/hP060VNj/Icono-de-vivo.png'/></td>:((item.status == 'Dead')? <td><img className='w-4 h-4 mx-7' src='https://i.postimg.cc/NGW3dgNy/Icono-de-muerto.png'/></td>: <td className='mx-8'>?</td>)
        }

      <td className='w-1/12 text-center'>{item.species}</td>

      <td className='w-1/12 text-center'>{item.gender}</td>

      <td className='w-1/12 text-center'>{item.origin.name}</td>

      <td className='w-1/12 text-center'>{item.location.name}</td>

      <td className='w-1/12 text-center'>{item.episode.length}</td> 

      <td className='w-1/12 text-center'>{
            apiDate(item.created)
         }</td> 

      <td className='flex items-center text-gray-500'> <img className='w-4 h-4 mr-2' src='https://i.postimg.cc/7PmCzWXQ/Icono-imagen.png'/> Acciones</td>
       
       </tr>            
        ))
       }
       
    </table>        
    </div>
  )
}

export default Characters