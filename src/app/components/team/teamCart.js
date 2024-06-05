import React from 'react';
import Image from 'next/image';
import {doctors} from '../data/data';

const cart = () => {
  return (
    <div className="flex flex-col mb-24 ">
      {/* 1st Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-auto mx-24 ">
        {doctors.slice(0, 4).map((doctor) => (
          <div
            key={doctor.id}
            className="px-5 sm:px-8 py-5 relative flex  w-[71%] md:w-96 flex-col rounded-xl bg-customCartColor bg-clip-border text-gray-700 shadow-md items-center"
          >
            <div className="flex flex-col text-left">
              <Image src={doctor.image} />
              <h5 className="mt-5 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {doctor.name}
              </h5>
              <h5 className="block text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                {doctor.degree}
              </h5>
              <p className="flex w-full justify-center text-base font-light text-teamTextColor">
                {doctor.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 2nd row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-auto mx-24 mt-10">
        {doctors.slice(4).map((doctor) => (
          <div
            key={doctor.id}
            className="px-5 sm:px-8 py-5 relative flex w-[70%] md:w-96 flex-col rounded-xl bg-customCartColor bg-clip-border text-gray-700 shadow-md items-center"
          >
            <div className="flex flex-col">
              <Image src={doctor.image} />
              <h5 className="mt-5 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {doctor.name}
              </h5>
              <h5 className="block text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                {doctor.degree}
              </h5>
              <p className="flex w-full justify-center text-base font-light text-teamTextColor">
                {doctor.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cart;
