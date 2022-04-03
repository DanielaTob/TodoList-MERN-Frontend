import React from "react";
import { MdSend } from 'react-icons/md';
import Task from "./Task";

export default function Form() {
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
            <button class="btn btn-info">
                <MdSend className="text-white"/>
            </button>
          </div>
        </form>
      </div>

        <Task />
        <Task />
        <Task />
   
    </div>
    </div>
  );
}
