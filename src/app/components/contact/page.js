import React from "react";
import ContactItems from "./contactItems";
import locationIcon from "../../assets/contactIcons/location_icon.svg";
import emailIcon from "../../assets/contactIcons/email_icon.svg";
import phoneIcon from "../../assets/contactIcons/phone_icon.svg";
import WhatsappIcon from "../../assets/contactIcons/whatsapp_icon.svg";
import Head from "../heading/heading";

const Contact = () => {
  return (
    <div className="flex flex-col sm:items-center px-20 py-20 bg-customCartColor max-w-auto ">
      <Head title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto">
        {["Miami", "India", "Pakistan"].map((location, index) => (
          <div key={index} className="p-5 relative w-[27rem]">
            <iframe
              title={`Google Map ${location}`}
              src={`https://maps.google.com/maps?q=${location}&output=embed`}
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-auto">
        {[...Array(3).keys()].map((index) => (
          <div key={index} className="px-5 py-10 relative flex w-full md:w-[27rem]">
            <div className="flex flex-col">
              <ContactItems
                title="Clinic Lorem Ipsum"
                subTitle="Location:"
                para="4517 Washington Ave. Manchester, Kentucky 39495"
                imgIcon={locationIcon}
              />
              <ContactItems subTitle="Phone:" para="(432) 123446098" imgIcon={phoneIcon} />
              <ContactItems subTitle="Whatsapp:" para="+923 123446098" imgIcon={WhatsappIcon} />
              <ContactItems subTitle="Email:" para="clientmail44@gmail.com" imgIcon={emailIcon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
