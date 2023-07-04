import React from 'react'
import { datamyapp } from './dataMyapp'
import { ImageUrl } from '../../config/API'
import { useNavigate } from 'react-router-dom'

const MyApp = () => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-6 mt-10'>
        {datamyapp.map((data,index)=>(
            <div className='w-11/12 m-auto bg-gray-500 h-56 rounded hover:bg-slate-300'
            key={index}
            onClick={()=>{
              navigate(`/myapp/${data.name}`)
            }}
            style={{
              borderRadius: '30px',
              boxShadow: '10px 10px 10px -2px #6B7280',
            }}
            >
              <p className='text-center'>{data.name}</p>
              <img src={`${ImageUrl}/${data.thumnail}`}
              className='w-10/12 m-auto'
              />
            </div>
        ))}
    </div>
  )
}

export default MyApp