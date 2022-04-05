import React, { useEffect, useState, useRef} from "react";
import { useNavigate } from 'react-router';
import { MdSend } from 'react-icons/md';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

export default function Form() {
  const [data, setData] =useState([]);
  const title = useRef("");
  const description = useRef("");
  const [id, setId] = useState("");
  const navigate = useNavigate();


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

  
  function createTask(e){
    e.preventDefault();
    dato.title= title.current.value
    dato.description= description.current.value
    if(id){
      console.log("entro a editar");
      axios.put(`https://todo-list-daniela.herokuapp.com/api/tasks/${id}`, dato)
      .then(res => {
        console.log(res);
      })
    }else {
      console.log("entro a agregar");
      axios.post('https://todo-list-daniela.herokuapp.com/api/tasks', dato)
    .then(res=>{
      console.log(res);
    })
    console.log(dato);
    }
    setId("");
    navigate("/Landing")
  }

  

  const handleSubmit = (id) => {

    axios.delete(`https://todo-list-daniela.herokuapp.com/api/tasks/${id}`)
      .then(res => {
        console.log(res);
      })
  }

  const update = (item) =>{
    const resultado= item._id
    setId(resultado);

    title.current.value = item.title
    description.current.value = item.description

    }
 
  return (
    <div>
    <h1 className="bg-base-200 text-slate-400 text-center p-2 font-medium text-xl">Write your Task!</h1>
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 place-items-center min-h-screen bg-base-200">
      <div className="w-full max-w-xs">
        <form  className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input ref={title} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <input ref={description} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div className="flex items-center justify-between">
            
            <button onClick={(e)=>createTask(e)} type="submit" class="btn btn-info">
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
          <form type="submit">
          <button onClick={()=>handleSubmit(items._id)} className="btn bg-red-900"><FaTrash /></button>
          </form>

          <button onClick={()=>update(items)} className="btn bg-teal-900"><FaEdit /></button>
          
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
