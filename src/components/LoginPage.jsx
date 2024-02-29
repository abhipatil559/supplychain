import { Navigate ,useNavigate } from "react-router-dom";
import supplychainimg from "../assets/SupplyChainImg.jpg";
import tcslogo from "../assets/tcslogo.png"
import React, { useRef, useState } from 'react';

const LoginPage = ({setUser}) => {

  const form = useRef();
  const navigate = useNavigate();

  

  const submit = (e) => {
    e.preventDefault();
    const username = form.current[0].value;
    const password = form.current[1].value;

    console.log(form.current[0].value)
    console.log(form.current[1].value)

    async function Click() {
      const rawResponse = await fetch('https://supplychain-lzui.onrender.com/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email:form.current[0].value,
            password:form.current[1].value
          })
      });
  
      const Response = await rawResponse.json();
      console.log(Response)
      if(Response?.msg=='Login successful'){
        setUser(Response.token)
        return navigate("/Dashboard");
      }else{

      }
  }
  Click();
    // return navigate("/Dashboard");
};



  return (
    <div>
        <nav className="absolute bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src={tcslogo} class="h-8" />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
        </div>
      </nav>
    
    <div className="h-screen w-full  flex items-center justify-center px-5">
      <div className="flex flex-wrap border-2 border-blue-600 p-6 rounded-lg">
        <div className="me-5 ms-5">
          <img src={supplychainimg} width="500" />
        </div>

        <div className="w-[1/2] flex-1 p-4">
        <div className="">
          <form ref={form} onSubmit={submit}  class="mx-auto">
          {/* <h1 class="mb-4 text-base font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please Login</h1> */}

            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>

          {/* <Link to="../Dashboard">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Link> */}
        </div>

        </div>
        
      </div>
    </div>
    </div>
  );
};
export default LoginPage;
