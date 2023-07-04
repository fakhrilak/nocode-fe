import React, { useState } from 'react'
import JsonToHtml from '../JsonToHtml/JsonToHtml'
import Modal from '../Modal/Modal'
import { process } from './process'
import {reqs} from "./colorsreq"

const Table = ({data}) => { 
    const [show,setShow] = useState(false)
    const  renderColor =(req)=>{
      for(let i=0;i<reqs.length;i++){
        if(reqs[i].name == req){
          return reqs[i].color
        }
      }
    }
  return (
    <div>
        <table  className="min-w-max w-full table-auto">
                <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            {data.header.map((header,index)=>(
                                 <th className="py-3 px-6 text-center"
                                 key={index}
                                 >{data.header[index]}</th>
                        ))}
                        </tr>
                </thead>
                <tbody className="text-white text-sm font-light">
                        {data.body.map((data,index)=>(
                            <tr key={index}
                            className="border-b border-gray-200 hover:bg-gray-100 hover:text-green-700 h-14"
                            >
                                <td  className="text-center whitespace-nowrap">
                                    {index+1}
                                </td>
                                <td  className="text-center whitespace-nowrap">
                                    {data.name}
                                </td>
                                <td  className={`text-center whitespace-nowrap`
                                }style={{color:renderColor(data.method)}}>
                                    {data.method}
                                </td>
                                <td  className="text-left whitespace-nowrap">
                                    {data.route}
                                </td>
                                <td  className="text-center whitespace-nowrap">
                                    <button className='bg-gray-200 h-10 rounded text-black w-6/12'
                                    onClick={()=>{
                                    setShow(!show)
                                  }}
                                    >open process</button>
                                </td>
                            </tr> 
                        ))}
                </tbody>
        </table>
        <Modal
        show={show} 
        handleshow={setShow} 
        >
            <div className='w-11/12 m-auto mt-2'>
              {process.map((data,index)=>(
                <div key={index} className="mt-1 mb-1 border-b">
                  <div className='grid grid-cols-2'>
                    <p>{data.name}</p>
                    <p className='text-right'>{index}</p> 
                  </div>
                  {<code className="prettyprint">{JSON.stringify(data.proces)}</code>}
                </div>
              ))}
            </div>
        </Modal>
    </div>
  )
}

export default Table