import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Head from "../heading/heading";

const images = [
  require("../../assets/sliderImages/slider_img1.svg"),
  require("../../assets/sliderImages/slider_img2.svg"),
  require("../../assets/sliderImages/slider_img3.svg"),
  require("../../assets/sliderImages/slider_img4.svg"),
  require("../../assets/sliderImages/slider_img5.svg"),
  require("../../assets/sliderImages/slider_img6.svg"),
  require("../../assets/sliderImages/slider_img7.svg"),
  require("../../assets/sliderImages/slider_img8.svg"),
  require("../../assets/sliderImages/slider_img9.svg"),
  require("../../assets/sliderImages/slider_img10.svg"),
  require("../../assets/sliderImages/slider_img11.svg"),
  require("../../assets/sliderImages/slider_img12.svg"),
];

function Page() {
  return (
    <div className="flex flex-col px-24 py-28 bg-customCartColor max-w-auto">
      <div className="flex flex-col justify-center items-center">
        <Head title="Our Clinic" />

        <Marquee className="mt-20">
          {images.map((img, index) => (
            <Image className="px-5" key={index} src={img} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Page;
