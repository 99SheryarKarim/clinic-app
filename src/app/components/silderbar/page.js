"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Head from "../heading/heading";
const page = () => {
  const barImages = [
    require("../../assets/sliderBarImages/glossy.png"),
    require("../../assets/sliderBarImages/proline.png"),
    require("../../assets/sliderBarImages/invert.png"),
    require("../../assets/sliderBarImages/blossom.png"),
    require("../../assets/sliderBarImages/snowflake.png"),
    require("../../assets/sliderBarImages/robotx.png"),
    require("../../assets/sliderBarImages/cactus.png"),
    require("../../assets/sliderBarImages/vision.png"),
    require("../../assets/sliderBarImages/levelup.png"),
  ];
  return (
    <div className="flex flex-col px-20 h-[410px]  max-w-auto">
      <div className="flex flex-col justify-center items-center">
        <Head title="Our Trusted Partners" />
        <Marquee className="mt-20">
          {barImages.map((img, index) => (
            <Image className="mx-10" key={index} src={img} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
export default page;
