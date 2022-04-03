import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function Task() {
  return (
    <div>
      <div className="card w-96 bg-neutral">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Go to the park</h2>
          <p>I should to the park around 6 pm</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-900"><FaTrash /></button>
            <button className="btn bg-teal-900"><FaEdit /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
