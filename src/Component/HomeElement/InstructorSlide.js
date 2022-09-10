import { Icon } from "@iconify/react";
import ins1 from "../../Img/inst1.jpg";
import ins2 from "../../Img/ins2.jpg";
import ins3 from "../../Img/ins3.jpg";
import ins4 from "../../Img/ins4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function InstructorSlide() {
  return (
    <>
      <div className="container mx-auto student_review">
        <Swiper
          slidesPerView={4}
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <div className="ins_card">
                <img className=" w-80 h-80 mb-8" src={ins1} alt="" />

                <div className="social_item">
                  <div className=" w-10 h-10 bg-khaki flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="dashicons:facebook-alt"
                    />
                  </div>
                  <div className=" w-10 h-10  bg-orenge flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="akar-icons:linkedin-v2-fill"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-black  font-semibold text-base text-center  font-rly">
                Md. Mehedi Hassan
              </h2>
              <p className=" font-medium  text-sm text-center text-black   font-rly">
                Founder & AI Expert
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="ins_card">
                <img className=" w-80 h-80 mb-8" src={ins2} alt="" />

                <div className="social_item">
                  <div className=" w-10 h-10 bg-khaki flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="dashicons:facebook-alt"
                    />
                  </div>
                  <div className=" w-10 h-10  bg-orenge flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="akar-icons:linkedin-v2-fill"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-black  font-semibold text-base text-center  font-rly">
                Jarif Huda Angon
              </h2>
              <p className=" font-medium  text-sm text-center text-black   font-rly">
                CTO & Instructor
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="ins_card">
                <img className=" w-80 h-80 mb-8" src={ins3} alt="" />

                <div className="social_item">
                  <div className=" w-10 h-10 bg-khaki flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="dashicons:facebook-alt"
                    />
                  </div>
                  <div className=" w-10 h-10  bg-orenge flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="akar-icons:linkedin-v2-fill"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-black  font-semibold text-base text-center  font-rly">
                Sabbir Hussain
              </h2>
              <p className=" font-medium  text-sm text-center text-black   font-rly">
                Sr. Web Developer
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="ins_card">
                <img className=" w-80 h-80 mb-8" src={ins4} alt="" />

                <div className="social_item">
                  <div className=" w-10 h-10 bg-khaki flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="dashicons:facebook-alt"
                    />
                  </div>
                  <div className=" w-10 h-10  bg-orenge flex justify-center items-center">
                    <Icon
                      className=" text-white"
                      icon="akar-icons:linkedin-v2-fill"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-black  font-semibold text-base text-center  font-rly">
                Sabbir Hussain
              </h2>
              <p className=" font-medium  text-sm text-center text-black   font-rly">
                Sr. Web Developer
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
