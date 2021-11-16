import {useState} from 'react'
import './App.css';
import React from 'react';

function App() {
  const[toDos,settoDos]=useState([])
  const[Todo,setTOdo]=useState('')
  return ( <div className="app">
  <div className="mainHeading">
    <h1>ToDo List</h1>
  </div>
  <div className="subHeading">
    <br />
    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
  </div>
  <div className="input">
    <input value={Todo} onChange={(e)=>{setTOdo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
    <i onClick={()=>{settoDos([...toDos,{id:Date.now(),text:Todo,status2:false,status:false}])}} className="fas fa-plus"></i>
  </div>
  
  <div className="todos">
    { toDos.map((obj=>{
      if(obj.status2===false){ 
    return(
    <div className="todo">
      <div className="left">
        <input onChange={(e)=>{
          settoDos(toDos.filter(obj2=>{
            console.log(e.target.checked)
             if(obj2.id===obj.id){
              obj2.status=e.target.checked
            }
            return obj2
          }))
        }} type="checkbox" name="" id="" />
        <p>{obj.text} </p> 
      </div>
      <div className="right">
        <i onClick={()=>{settoDos(toDos.filter(obj3=>{
          if(obj3.id===obj.id){
            obj3.status2=true
          }
          return obj3
        }))}} className="fas fa-times"></i>
      </div>
    </div>)}
     return null
  }))}
    { toDos.map((obj)=>{
      if(obj.status&&obj.status2===false){
        return(<h1>{obj.text}</h1>)
      }
      return null
    })

    }
    { toDos.map((obj)=>{
      if(obj.status2===true){
        return(
        <h1>{obj.text} </h1> 
          )
      }return null
    })}
  </div>
</div>
    
  );
}

export default App;
