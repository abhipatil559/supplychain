import React from "react";

import tcslogo from "../assets/tcslogo.png";

export default function ({ user }) {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={tcslogo} class="h-8" />
          <span className="font-bold text-lg">Inventory Dashboard </span>
          <div class="w-auto bg-slate-400">
            <span className="text-black">{user}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
