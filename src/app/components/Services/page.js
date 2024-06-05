import React from 'react';
import Cart from './cart';

const page = () => {
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-5xl font-semibold ">Our Services</h1>
        <p className=" mt-10 flex justify-center text-gray-600 font-normal leading-7 max-w-2xl max-w-auto align-middle">
          Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
          et dictumst duis gravida odio semper. Integer potenti viverra et
          interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor.
          Sem enim eget ac morbi placerat.
        </p>
      </div>
      <div className="mt-20">
        <Cart />
      </div>
    </div>
  );
};

export default page;
