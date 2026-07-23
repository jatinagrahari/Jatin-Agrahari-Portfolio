import React from "react";
import { expertise } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Button from "../../components/Ui/Button";

const Skills = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <div className=" mb-14 ">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-dark-accent">
            Core Expertise
          </span>

          <h2 className="mt-3 font-display font-semibold text-4xl md:text-5xl text-text-dark leading-tight">
            Building Modern Web Applications
          </h2>

          <p className="mt-5 max-w-2xl text-nav text-base md:text-lg leading-8 font-display">
            I build fast, responsive, and scalable frontend applications using
            modern React development practices, clean UI architecture, and
            seamless API integrations.
          </p>
        </div>

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"> */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          className="!pb-4"
          wrapperClass="items-stretch"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {expertise.map((skill) => {
            const Icon = skill.icon;

            return (
              <SwiperSlide key={skill.title} className="!h-auto flex">
                <article className="group h-full bg-[#fff] border border-border/10 rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-dark-accent/20 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-dark-accent group-hover:border-dark-accent">
                    <Icon
                      className="w-7 h-7 text-dark-accent transition-colors duration-300 group-hover:text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-text-dark mb-4 transition-colors duration-300 group-hover:text-dark-accent">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-nav leading-7 text-nav flex-grow">
                    {skill.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-8 pt-5 border-t border-border/10 flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium border border-accent/20 bg-accent/1 text-dark-accent transition-all duration-300 hover:bg-dark-accent hover:text-white hover:border-dark-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-lg text-dark-accent transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-center">
          <Button children={"<- ->"} type="secondary" />
        </div>
      </section>
      <div className="w-full h-px bg-border/30"></div>
    </div>
  );
};

export default Skills;
