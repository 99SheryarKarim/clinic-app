import React from "react";
import Image from "next/image";
import Vector_icon from "../../assets/vector_icon.svg";

const page = (props) => {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-5xl font-semibold ">{props.title}</h1>
        <Image className="mt-3" src={Vector_icon} alt="" />
        <p className="mt-7 flex justify-center text-center text-gray-600 font-normal leading-7 max-w-2xl align-middle">
          {props.des}
        </p>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};

export default page;
