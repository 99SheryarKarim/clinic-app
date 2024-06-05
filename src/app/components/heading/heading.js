import React from "react";
import Image from "next/image";
import Vector_icon from "../../assets/vector_icon.svg";

const page = (props) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-5xl font-semibold ">{props.title}</h1>
        <Image className="mt-3" src={Vector_icon} alt="" />
      </div>
    </div>
  );
};

export default page;
