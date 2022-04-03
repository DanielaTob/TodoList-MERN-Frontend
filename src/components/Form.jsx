import React from "react";
import { MdSend } from 'react-icons/md';

export default function Form() {
  return (
    <div className="bg-base-200 py-40 flex justify-center">
      <div className="w-full max-w-xs">
        <form class="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered input-info w-full max-w-xs"></input>
          </div>
          <div class="flex items-center justify-between">
            <button class="btn btn-info">
                <MdSend className="text-white"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
