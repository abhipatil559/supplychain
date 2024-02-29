import React from "react";

export default function Box(props) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center align-center gap-1">
      <h5
        class="text text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
        style={{ fontSize: "3rem" }}
      >
        123
      </h5>
      <p class=" font-normal text-gray-500 dark:text-gray-400">{props.msg1}</p>
      <h5 class="text-center text-l font-semibold tracking-tight text-gray-900 dark:text-white">
        {props.msg2}
      </h5>
    </div>
  );
}
