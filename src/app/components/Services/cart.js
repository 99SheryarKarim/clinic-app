import React from "react";
import Image from "next/image";
import { cartItems } from "../data/data";

const Cart = () => {
  return (
    <div className="flex flex-col items-center">
      {/* 1st Row */}
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-screen-xl ">
        {cartItems.slice(0, 3).map((item) => (
          <div key={item.id} className="cart-item">
            <div className="p-6 flex flex-col justify-center items-center sm:w-[20rem] md:w-[26rem] bg-[#F4F8FF] text-gray-700 shadow-md rounded-xl">
              <Image src={item.image} />
              <h5 className="my-5 text-xl font-semibold text-blue-gray-900">
                {item.title}
              </h5>
              <p className="text-base font-light text-center">
                {item.description}
              </p>
              <button className="mt-5 btn-primary">Learn More</button>
            </div>
          </div>
        ))}
      </div>
      {/* 2nd Row */}
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-screen-xl pt-10 ">
        {cartItems.slice(3, 6).map((item) => (
          <div key={item.id} className="cart-item">
            <div className="p-6 flex flex-col justify-center items-center sm:w-[20rem] md:w-[26rem] bg-[#F4F8FF] text-gray-700 shadow-md rounded-xl">
              <Image src={item.image} />
              <h5 className="my-5 text-xl font-semibold text-blue-gray-900">
                {item.title}
              </h5>
              <p className="text-base font-light text-center">
                {item.description}
              </p>
              <button className="mt-5 btn-primary">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      <div class="flex my-10 justify-center gap-10 max-w-auto">
        <button
          class="w-48 h-12 select-none rounded-lg text-base bg-cartbtnColor text-white py-3 px-6 text-center align-middle font-sans font-medium border-none"
          type="button"
          data-ripple-light="true"
        >
          More Services
        </button>
      </div>
    </div>
  );
};

export default Cart;
