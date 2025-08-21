"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Welcome to Our Store",
    description: "Discover amazing products at unbeatable prices!",
    image: "https://i.ibb.co/jPFPGh6T/image.png",
  },
  {
    id: 2,
    title: "Latest Collection",
    description: "Check out the newest arrivals in our store.",
    image: "https://i.ibb.co/HMqssBt/image.png",
  },
  {
    id: 3,
    title: "Best Deals",
    description: "Grab exclusive discounts before they're gone!",
    image: "https://i.ibb.co/kghzXmDK/image.png",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-b-2xl shadow-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-b-2xl scale-105 hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight text-white drop-shadow-2xl tracking-wide animate-fadeInDown">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mb-6 text-white/90 drop-shadow-md animate-fadeInUp">
                  {slide.description}
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-2xl transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg animate-bounce">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
