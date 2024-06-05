import React from "react";
import Head from "../heading/heading";
const ContactForm = () => {
  return (
    <div className="my-28 ">
      <div className="w-[100%]  bg-[#F4F8FF] py-[80px]">
        <Head title={"Send Us An Inquiry"} />
        <form className="w-full  px-20  py-[40px]">
          <div className="flex flex-col sm:flex-row  justify-between gap-[10px] sm:gap-[40px]">
            <div className="w-full">
              <label htmlFor="Name">
                Name: <span className=" text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                required
                className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone">
                Phone: <span className=" text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-4 mb-4 border rounded-md shadow-#000000 shadow-md "
              />
            </div>
          </div>

          <div>
            <label htmlFor="comment">
              Name: <span className=" text-red-500">*</span>
            </label>
            <textarea
              required
              name="comment"
              id="comment"
              className="w-full h-[140px] p-4 border rounded-md shadow-#000000 shadow-md "
            ></textarea>
          </div>

          <div className="flex flex-col items-center mt-12">
            <button
              class="w-48 h-12 select-none rounded-lg text-base bg-cartbtnColor text-white py-3 px-6 text-center align-middle font-sans font-medium border-none"
              type="button"
              data-ripple-light="true"
            >
              More Services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
