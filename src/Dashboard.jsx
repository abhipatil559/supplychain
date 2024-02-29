import React from "react";
import Progress from "./components/Progres";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Box from "./components/Box";


export default function Dashboard({user}) {

  
  return (
    <>
      <Navbar user={user}></Navbar>
      <div className="h-screen flex justify-center items-center gap-5">
        <Progress />
        <div className="">
          <span>Reorder Level 30%</span>

        </div>

      </div>
    </>
  );
}
