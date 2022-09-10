import user1 from "../../Img/user1.jpg";
import user2 from "../../Img/user2.jpg";
import user3 from "../../Img/user3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function MySlide() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <p className=" text-center   p-10 clip-student">
              “This course understood me the full concept of web development and
              it was very helpful and I understood things so easily. A beginner
              in this field will surely be benefited. Also the extra material is
              very helpful. This helped me take up full stack web development.”
            </p>
            <div
              className=" w-28  h-28 rounded-full bg-no-repeat bg-cover bg-current mx-auto mt-16"
              style={{ backgroundImage: `url(${user1})` }}
            ></div>
            <p className=" text-center text-black font-medium text-lg font-rly">
              Jane J. Turner
            </p>
            <p className=" text-center  text-user_lighten  font-medium  text-sm font-rly">
              Student
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p className=" text-center   p-10 clip-student">
              “Their course was really Pleasant. The way of their teaching was
              so unique and amazing. If anyone is really dedicated to learn and
              do something ,they should go for this course.“
            </p>
            <div
              className=" w-28  h-28 rounded-full bg-no-repeat bg-cover bg-current mx-auto mt-16"
              style={{ backgroundImage: `url(${user2})` }}
            ></div>
            <p className=" text-center text-black font-medium text-lg font-rly">
              Evelyn M. Kennedy
            </p>
            <p className=" text-center  text-user_lighten  font-medium  text-sm font-rly">
              Student
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <p className=" text-center   p-10 clip-student">
              “This course understood me the full concept of web development and
              it was very helpful and I understood things so easily. A beginner
              in this field will surely be benefited. Also the extra material is
              very helpful. This helped me take up full stack web development.”
            </p>
            <div
              className=" w-28  h-28 rounded-full bg-no-repeat bg-cover bg-current mx-auto mt-16"
              style={{ backgroundImage: `url(${user3})` }}
            ></div>
            <p className=" text-center text-black font-medium text-lg font-rly">
              Charles M. Barker
            </p>
            <p className=" text-center  text-user_lighten  font-medium  text-sm font-rly">
              Student
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
