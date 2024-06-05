import React from 'react';
import Image from 'next/image';

const contactItems = (props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <div className="mt-5 flex  ">
        <div className="mt-1 mr-7">
          <Image src={props.imgIcon} alt="" />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-base font-semibold text-black">{props.subTitle}</p>
          <p className="text-sm font-normal text-contactText">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default contactItems;
