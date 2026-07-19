import React from "react";
import { contactInfo } from "../../data";
import { NavLink } from "react-router-dom";
import { User, Mail, Tag, MessageSquare } from "lucide-react";
import ContactSvg from "../../assets/Contactus.svg";
import Button from "../../components/Ui/Button";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 pt-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center pb-10">
        {/* hero section */}
        {/* left section */}
        <div className="    flex flex-col justify-center py-10 lg:py-20 gap-10">
          <div className="">
            <h2 className="text-2xl lg:text-3xl font-display text-dark-accent mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-lg font body text-nav">
              {contactInfo.description}
            </p>
          </div>
          <div className="flex gap-4">
            <NavLink to={"/projects"}>
              <Button children={"Projects"} type={"primary"} />
            </NavLink>
            <NavLink to={"/about"}>
              <Button children={"About me"} type={"secondary"} />
            </NavLink>
          </div>
        </div>

        {/* right section */}
        <div className="">
          <img src={ContactSvg} alt="" />
        </div>
      </div>

      {/* mail section */}

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 pt-10">
        {/* Left section form */}
        <div className="bg-white rounded-2xl p-6">
          <div className="pb-10">
            <h3 className="text-surface font-semibold font-display text-2xl lg:text-3xl py-4">
              Send me a message
            </h3>
            <div className="w-16 h-1 rounded-full bg-accent"></div>
          </div>

          {/* form */}
          <form className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Name */}
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <Tag
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm sm:text-base outline-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-5 text-gray-400"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full min-h-[180px] sm:min-h-[220px] rounded-xl border border-gray-200 bg-white pl-11 pr-4 pt-4 text-sm sm:text-base outline-none resize-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-auto h-12 sm:h-14 px-8 rounded-xl bg-dark-accent text-white font-medium transition-all duration-300 cursor-pointer hover:bg-accent active:scale-95"
            >
              Send Message →
            </button>
          </form>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-5 ">
          <div className="text-surface font-semibold font-display text-xl lg:text-2xl py-4">
            <h3 className="">Other ways to reach me</h3>
            <div className="w-16 h-1 rounded-full bg-accent"></div>
          </div>
          {contactInfo.socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <div
                key={social.label}
                className=" flex items-start gap-5 rounded-3xl border border-border/10  bg-white/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-dark-accent/20"
              >
                {/* Icon */}
                <div className=" flex self-center h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-dark-accent/10 text-dark-accent">
                  <Icon size={26} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-semibold text-surface">
                    {social.label}
                  </h3>

                  <a
                    href={social.href}
                    className=" block text-sm text-text-dim hover:text-dark-accent transition-colors break-all"
                  >
                    {social.href}
                  </a>

                  <p className="text-sm leading-6 text-muted">{social.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
