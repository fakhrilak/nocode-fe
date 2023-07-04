import React from 'react'
import "./Modal.css"
const Modal = (props) => {
  const {show,handleshow,width,heigh,top,left} = props
  return (
    <div>
        {show? (
        <div className="w-screen h-11/12 bg-green-700">
            <div
            className="justify-center opacity-20 bg-black  fixed inset-0 z-40 outline-none focus:outline-none"
            onClick={()=>handleshow()}
            >
          </div>
          <div className={`fixed overflow-y-auto no-scrollbar text-white w-11/12 lg:w-5/12 bg-black bottom-px top-5 right-0 left-1 rounded-t-lg  shadow-2xl z-50 `}>
                {props.children}
          </div>
        </div>
      ) : null}
    </div>
  )
}
export default Modal