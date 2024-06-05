"use client";

import Header from "./components/header/page";
import Team from "./components/team/teamCart";
import Contact from "./components/contact/page";
import Slider from "./components/slider/page";
import Heading from "./components/heading/page";
import Cart from "./components/services/cart";
import Faqs from "./components/faq/page";
import SliderImg from "./components/silderbar/page";
import SendUS from "./components/sendus/page"
import Footer from "./components/footer/page"

export default function Home() {
  return (
    <>
      <Header />
      <Heading
        title="Our Services"
        des="Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
          et dictumst duis gravida odio semper. Integer potenti viverra et
          interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor.
          Sem enim eget ac morbi placerat."
      />
      <Cart />
      <Slider />
      <Heading
        title="Meet Our Team"
        des="Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices gravida
          et dictumst duis gravida odio semper. Integer potenti viverra et
          interdum lobortis amet nisi lorem. Amet sed sit risus dictum dolor.
          Sem enim eget ac morbi placerat."
      />

      <Team />
      <Contact />
      <Faqs/>
      <SendUS/>
      <SliderImg />
      <Footer/>
    </>
  );
}
