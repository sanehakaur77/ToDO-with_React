import React, {  useEffect, useState } from 'react'


const App = () => {
  const [value,setValue]=useState("");
  const [task,setTask]=useState([]);
  const [date,setDate]=useState("");
  //  using useEffect for the storing tasks in local Storage
  useEffect(()=>{
    const savedTasks=localStorage.getItem("tasks");
    if(savedTasks){
      setTask(JSON.parse(savedTasks));
    }
  },[])
    
  //  when the tasks changes then new taskes are updated and stored in the localStorage
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(task));
  },[task])
const addValue=(e)=>{
  
  setValue(e.target.value);
  
}
const setData=(e)=>{
  setDate(e.target.value);
}
const addDate = (e) => {
  setDate(e.target.value);
};
const addTask=()=>{
 if (value.trim() === "" ||  date.trim()==="" ) {
    alert("Input field is required");
    return;
  }

const copyele=[...task];
copyele.push(value);
setTask(copyele);
setValue("");



}
function deleteTask(idx){
 const copyFields=[...task];
 copyFields.splice(idx,1);
setTask(copyFields);
}

  

   

  return (
   <center className="toDo-container">
    <h1>Todo App</h1>
      <br />
      <div className="box">
        <div className="box2">
          <input type="text"  placeholder='enter your task'
         onChange={addValue} 
         value={value}/>
        <input type='date' onChange={addDate} onClick={setData} />
        <button id='btn'onClick={addTask}>Add</button>
        </div>
        <div className="list-items">
          {
            
            task.map((ele,idx)=>{
              return(
                <div className="lists">
              <div key={idx} className='list'>
                
                  
                <li >{ele}</li>
                
                
              </div>
              <div className="dates">
                {date}
              </div>
              <div className="cross">
                <button id='del-btn' onClick={()=>deleteTask(idx)}>Delete</button>
              </div>
                </div>
              )
            })
            
          }
        </div>
           
         
      </div>
   </center>
  )
}


export default App
