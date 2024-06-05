"use client";
import React, { useState } from "react";
import { FaqData } from "../data/data";
import Head from "../heading/heading";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="w-99% md:w-[90%] mx-auto">
      <div className="py-8">
        <Head title="Send Us An Inquiry" />

        {/* zz */}
      </div>
      {FaqData.map((data, index) => (
        <div
          key={index}
          className=" py-1 px-5 my-4 mx-2 shadow-md"
          style={{ border: "1px solid #F5A52429" }}
        >
          <div
            className="flex justify-between items-center cursor-pointer py-2 px-4"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-medium text-black  text-[16px]">
              {" "}
              {data.title}
            </h3>
            <div>
              {activeIndex === index ? (
                <div className="bg-[#007BFF] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                  <IoIosArrowUp color="white" size={25} />
                </div>
              ) : (
                <div className="bg-[#007BFF] w-[32px] h-[32px] flex items-center justify-center  rounded-full">
                  <IoIosArrowDown color="white" size={25} />
                </div>
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <p className=" font-normal text-[1rem] text-[#666666]">
                {data.text}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Faqs;
