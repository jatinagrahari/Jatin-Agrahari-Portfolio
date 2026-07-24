import React from "react";
import { ProjectCards } from "../../data/projectsData";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";

const FeaturedProjects = () => {
  return (
    <div>
      <section className="w-full  py-20 px-6 bg-gradient-to-b from-bg-dark to-bg ">
        <div className="max-w-7xl mx-auto">
          {/* ── Section header ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase mb-3 block">
              FEATURED PROJECTS
            </span>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-surface leading-tight">
                Case Studies
              </h2>

              <NavLink
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-sm font-semibold
                         text-dark-accent border border-accent/30 rounded-full px-5 py-2
                         hover:bg-accent hover:text-white transition-all duration-200"
              >
                View All Projects →
              </NavLink>
            </div>

            <p
              className="text-nav mt-3 max-w-2xl text-base leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Projects showcasing modern React development, responsive
              interfaces, reusable architecture, and practical solutions across
              automation, productivity, e-commerce, and utility applications.
            </p>
          </motion.div>

          {/* ── Project cards auto-slider ── */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 [::-webkit-scrollbar]:hidden">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                speed={900}
                className="!pb-4"
                wrapperClass="items-stretch"
                autoplay={{
                  delay: 2500,
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {ProjectCards.filter((card) => card.featuredProject).map(
                  (project) => (
                    <SwiperSlide key={project.id}>
                      <div
                        key={project.id}
                        className="group flex flex-col w-full h-full bg-bg rounded-2xl border border-border/20 overflow-hidden
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-accent/40 hover:shadow-2xl
                  transition-all duration-500 ease-out"
                        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                      >
                        {/* ── Card top bar ── */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4">
                          {/* Category */}
                          <span className="text-xs font-semibold text-nav tracking-wide uppercase">
                            {project.projectCategory}
                          </span>

                          {/* Status badge */}
                          <span
                            className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 text-dark-accent bg-accent/10 transition-all duration-300 hover:bg-accent hover:text-white `}
                          >
                            {project.projectStatus}
                          </span>
                        </div>
                        <div className="">
                          <div className="p-8 ">
                            <img
                              src={project.projectThumbnail}
                              alt=""
                              className="rounded-xl transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="px-6 pb-10 ">
                            <h3
                              className="text-xl font-bold text-surface mb-2 leading-snug
                          hover:text-dark-accent transition-colors duration-200 font-body"
                            >
                              {project.projectTitle}
                            </h3>
                            <p className="text-sm text-nav leading-relaxed">
                              {project.projectDescription}
                            </p>
                          </div>
                        </div>

                        {/* ── Stack tags ── */}
                        <div className="px-6 pb-5 flex flex-wrap gap-1.5">
                          {project.projectTags.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium text-nav bg-surface-2
                        border border-border/40 rounded-full px-2.5 py-0.5 transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* ── Card footer CTA ── */}
                        <div className="mt-auto px-6 py-4 border-t border-border/30">
                          <NavLink
                            to={project.projectSecondaryLink}
                            className="inline-flex items-center gap-2 text-sm font-semibold
                        text-dark-accent group-hover:gap-3 transition-all duration-200"
                          >
                            View Project
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div
            className="mt-10 flex justify-center md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold
                       text-dark-accent border border-accent/30 rounded-full px-6 py-2.5
                       hover:bg-accent hover:text-white transition-all duration-200"
            >
              View Project →
            </NavLink>
          </motion.div>
        </div>
      </section>
      <div className="w-full h-px bg-border/30"></div>
    </div>
  );
};

export default FeaturedProjects;
