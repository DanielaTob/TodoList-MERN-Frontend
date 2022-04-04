import React, { useEffect, useState} from "react";
import { MdSend } from 'react-icons/md';
import Task from "./Task";
import axios from "axios";

export default function Form() {
  const [data, setData] =useState([]);

  useEffect(() => {
      api();
  }, [])

  async function api(){
    axios.get('http://localhost:4000/api/tasks')
    .then(res=>{
      const result=res.data;
      setData(result);
    })
  }

  const dato = {
    title: "",
    description: ""
  }

  function createTask(){
    const array=document.querySelectorAll(".task")
    if (array){
      for (let index = 0; index < array.length; index++){
        if (array[index].value==""){
          continue
        }
        dato.task.push(array[index.value]);
      }
    } 
    dato.title="hola"
    dato.description="holaaaa"

    axios.post('http://localhost:4000/api/tasks', dato)
    .then(res=>{
      console.log(res.dato);
    })
    console.log(dato);
  }
  return (
    <div>
    <h1 className="bg-base-200 text-slate-400 text-center p-2 font-medium text-xl">Write your Task!</h1>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 place-items-center min-h-screen bg-base-200">
      <div className="w-full max-w-xs">
        <form className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={createTask} type="submit" class="btn btn-info">
                <MdSend className="text-white"/>
            </button>
          </div>
        </form>
      </div>

{
  data.map(items =>{
    return <Task title={items.title} description={items.description}/>
  })
}

        

   
    </div>
    </div>
  );
}
