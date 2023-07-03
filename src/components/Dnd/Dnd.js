import React, { useEffect, useRef, useState } from 'react'
import { COLUMN_NAMES } from "./constants";
import { tasks } from "./tasks";
import Process from './Process';
import "./assets/styles/App.css";
import MovableItem from './MovableItem';
import Column from './Column';
import { connect } from 'react-redux';



  

const Dnd = (props) => {
  const [items, setItems] = useState(tasks);
  const [search,setSearch] = useState("")
  const initialTasks = tasks;
  // const [targetBox,setTargetBox] = useState([])
  useEffect(()=>{
    const filtered = initialTasks.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    setItems(filtered)
  },[search])
  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .sort((a,b)=>a.id - b.id)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
          // targetBox={targetBox}
          // setTargetBox={setTargetBox}
        />
      ));
  };

  const { FUNCTION, PROCESS} = COLUMN_NAMES;
  console.log(search)
  return (
    <>
    <div className='w-11/12 m-auto mt-10'>
      <input 
      className='w-3/12 rounded'
      type='text'
      placeholder='SEARCH NAME FUNCTIONS'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
    <div className="w-11/12 h-96 grid grid-cols-2 m-auto gap-5 mt-7">
        <Column title={FUNCTION} className="grid grid-cols-3 gap-4 w-full overflow-y-auto h-96 m-auto overflow-hidden no-scrollbar">
          {returnItemsForColumn(FUNCTION)}
        </Column>
        <Column title={PROCESS} className="m-auto w-11/12 overflow-y-scroll h-96 right-0 rounded-xl overflow-hidden border border-white no-scrollbar">
          <p className='text-center text-white'>PROCESS</p>
          {props.dnd.targerBox.map((data,index)=>(
            <Process data={data} index={index} key={index}/>
          ))}
        </Column>
    </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  dnd: state.dnd,
});

export default connect(mapStateToProps, {})(Dnd)