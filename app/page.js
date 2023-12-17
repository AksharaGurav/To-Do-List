"use client";
import React, { useState } from "react";

const page = () => {
  //   Task:
  const [title, settitle] = useState("");
  //  Description
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  //Display of array of tasks
  let renderTask = <h2>No task available</h2>;
  //For deleting a task
  const deleteHandler=(i)=>{
    let copytask=[...mainTask];
    copytask.splice(i,1);
    setmainTask(copytask);
  }
  //Display of task and description
  if(mainTask.length>0){
  renderTask = mainTask.map((t, i) => {
    return (
      <li key={i} className="flex items-center justify-between">
        <div className="  items-center justify-between mb-5 w-2/3">
  
          <h5 className="text-2xl font-bold">{i+1}) {t.title}</h5>
          <hr />
          <h6 className="text-xl italic" >{t.desc}</h6>
        </div>
        <button onClick={()=>{deleteHandler(i)}} className="bg-black text-slate-50 px-4 py-2 rounded font-bold margin-bottom-5">Delete</button>
      </li>
    );
  });
}
//Insertion of task in the array
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  return (
    <>
      <h1 className=" bg-blue-500 text-rose-50 p-5 text-5xl font-bold text-center">
        To-Do List
      </h1>

      {/* Enter your task and its discription */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="px-4 py-2 m-8 border-4 text-2xl border-zinc-800 "
          placeholder="Insert your task"
          value={title}
          onChange={function (e) {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="px-4 py-2 m-8 border-4 text-2xl border-zinc-800 "
          placeholder="Enter description here"
          value={desc}
          onChange={function (e) {
            setdesc(e.target.value);
          }}
        />
        <button className="border-4 px-4 py-2 border-blue-700 m-6 text-xl bg-blue-700 font-bold text-rose-50">
          Add task
        </button>
      </form>
      <hr />
      {/* Display block  */}
      <div className="p-8 bg-blue-200">           
        <ul>{renderTask}</ul> 
      </div>
    </>
  );
};

export default page;


