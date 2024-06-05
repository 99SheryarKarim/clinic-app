import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
function page() {
  const social_icon = [
    require("../../assets/socialIcons/facebook.png"),
    require("../../assets/socialIcons/twitter.png"),
    require("../../assets/socialIcons/insta.png"),
    require("../../assets/socialIcons/linkedin.png"),
  ];
  return (
    <div className="flex flex-col bg-[#F1F1F1] ">
      <div className=" flex flex-col md:flex-row gap-10 max-w-auto justify-between w-[90%] mx-auto  py-20">
        <div className="relative flex w-[25rem] flex-col">
          <div className="h-20 flex items-center">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image src={logo} alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-carbtnTextColor">
                LOGO
              </span>
            </a>
          </div>
          <div className="text-xl text-contactText mt-7 font-400">
            Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices
            gravida et dictumst duis gravida odio semper. Integer potenti
            viverra et interdum lobortis amet nisi lorem. Amet sed sit risus
            dictum dolor. Sem enim eget ac morbi placerat.
          </div>
        </div>
        <div className=" flex w-[16rem] flex-col items-center sm:items-start">
          <div className="h-20 text-2xl font-semibold whitespace-nowrap dark:text-carbtnTextColor items-center content-center">
            Features
          </div>
          <div>
            <p className="text-base text-contactText mt-7 font-400">Services</p>
            <p className="text-base text-contactText mt-5 font-400">Our Team</p>
            <p className="text-base text-contactText mt-5 font-400">
              Contact Us
            </p>
            <p className="text-base text-contactText mt-5 font-400">FAQs</p>
          </div>
        </div>
        <div className=" flex w-[16rem] flex-col ">
          <div className="h-20 text-2xl font-semibold whitespace-nowrap dark:text-carbtnTextColor items-center content-center">
            Follow Us
          </div>
          <div>
            <div className="flex mt-7 gap-5">
              {social_icon.map((img, index) => (
                <Image key={index} src={img} alt="social icons image error" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;
