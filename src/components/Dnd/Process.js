import React, { useEffect, useState } from 'react'
// import { FormItem } from '../FormItem/FormItem'

const Process = ({data,index}) => {

  return (
    <div className='w-11/12 text-black rounded m-auto mt-2 grid grid-cols-10 gap-2'
            key={index}
            >
        <div className='bg-white'>
            <p>{index}</p>
        </div>
        <div className='col-span-8 bg- bg-white'>
            <p>{data.name}</p>

        </div>
    </div>
  )
}

export default Process;