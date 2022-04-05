import React, { useEffect, useState} from "react";
import { MdSend } from 'react-icons/md';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

export default function Form() {
  const [data, setData] =useState([]);
  
  useEffect(() => {
      api();
  }, [])


  async function api(){
    axios.get('https://todo-list-daniela.herokuapp.com/api/tasks')
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
        if (array[index].value===""){
          continue
        }
        dato.task.push(array[index.value]);
      }
    } 

    /* dato.title="hola"
    dato.description="holaaaa"  */
    

    axios.post('https://todo-list-daniela.herokuapp.com/api/tasks', dato)
    .then(res=>{
      console.log(res.dato);
    })
    console.log(dato);
  }


  const handleSubmit = (id) => {

    axios.delete(`https://todo-list-daniela.herokuapp.com/api/tasks/${id}`)
      .then(res => {
        console.log(res);
      })
  }

  const update = (id) =>{

      axios.put(`https://todo-list-daniela.herokuapp.com/api/tasks/${id}`)
      .then(res => {
        console.log(res);
      })
    }
 
  return (
    <div>
    <h1 className="bg-base-200 text-slate-400 text-center p-2 font-medium text-xl">Write your Task!</h1>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 place-items-center min-h-screen bg-base-200">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input  type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <input  type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
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
    return (
      <div key={items._id} className="card w-96 bg-neutral">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{items.title}</h2>
        <p>{items.description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleSubmit(items._id)} className="btn bg-red-900"><FaTrash /></button>
          <button onClick={()=>update(items._id)} className="btn bg-teal-900"><FaEdit /></button>
        </div>
      </div>
    </div>
    )
  })
}

    </div>
    </div>
  );
}

