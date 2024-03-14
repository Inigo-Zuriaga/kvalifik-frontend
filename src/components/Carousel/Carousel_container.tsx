import React, { Component } from "react";
import Card from "./Card";
import sofie from "../../assets/images/people/sofie.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
function Carousel_container({ title }: any) {
  return (
    <>
      <div className="card_container">
        <h1 className="card_container-text">{title}</h1>

        <Swiper className="mySwiper">
          <SwiperSlide>
            <Card
              quote="Sofie helped us get along. At first it was the only thing that we only had to dress once, but it was just great that now we dress every other week!"
              photo={sofie}
              name="Sofie"
              rol="From the quartet Classic Amok"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              quote="Natalia helped us get along. At first it was the only thing that we only had to dress once, but it was just great that now we dress every other week!"
              photo={sofie}
              name="Natalia"
              rol="From the quartet Classic Amok"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              quote="Maria us get along. At first it was the only thing that we only had to dress once, but it was just great that now we dress every other week!"
              photo={sofie}
              name="Maria"
              rol="From the quartet Classic Amok"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Carousel_container;
