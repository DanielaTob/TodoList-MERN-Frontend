import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function Task({title, description}) {
 
  return (
    <div>
      <div className="card w-96 bg-neutral">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-900"><FaTrash /></button>
            <button className="btn bg-teal-900"><FaEdit /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
