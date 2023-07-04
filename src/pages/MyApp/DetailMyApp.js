import React from 'react'
import { useParams } from 'react-router-dom'
import Table from '../../components/Table/Table'
import { dataDetailApp } from './dataMyapp'

const DetailMyApp = () => {
  const {appname} = useParams()
    const dataTable = {
        header:["No","Name","Method","Endpoint","Proces"],
        body : dataDetailApp
    }
  return (
    <div className='mt-10'>
        <Table data={dataTable}/>
    </div>
  )
}

export default DetailMyApp