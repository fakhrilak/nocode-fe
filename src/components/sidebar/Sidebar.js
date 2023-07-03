import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import { ImageUrl } from '../../config/API';
const Sidebar = (props) => {
    const [open, setOpen] = useState(true);
    const [activeMenu,setActiveMenu] = useState({})
    const navigate = useNavigate()
    const Menus = [
      { title: "Home", src: "python.png" ,path:"/"},
      { title: "Myapp", src: "javascript.png" ,path:"/myapp"},
      { title: "Profile", src: "nginx.png" ,path:"/profile"},
      { title: "DND", src: "rabbitmq.png" ,path:"/dnd"}
    ];

  return (
    <div className="flex">
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-gray-500 h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="https://blogger.zilog.online/static/media/logo.436f1557.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="https://blogger.zilog.online/static/media/logo.436f1557.png"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
          onClick={()=>{
            navigate("/")
          }}
        />
        {/* <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1> */}
      </div>
      <ul className="pt-6 overflow-y-scroll h-96 no-scrollbar mt-10">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-sm h-14 items-center gap-x-4 shadow-lg
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === activeMenu.index && "bg-white"
            } `}
            onClick={()=>{
              setActiveMenu({name:Menu.title,index:index})
              navigate(Menu.path)
            }}
          >
            <img src={`${ImageUrl}/${Menu.src}`} 
            className='w-10'
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 p-7 bg-black">
      <h1 className="text-xl font-semibold text-white">{activeMenu.name}</h1>
        {props.children}
    </div>
  </div>
  )
}

export default Sidebar