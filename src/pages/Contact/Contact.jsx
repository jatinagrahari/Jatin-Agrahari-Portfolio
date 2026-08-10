import React from "react";
import { contactInfo, Quotes } from "../../data";
import { NavLink } from "react-router-dom";
import { User, Mail, Tag, MessageSquare } from "lucide-react";
import Button from "../../components/Ui/Button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  const quote = Quotes[randomNumber];
  const [sendMessageText, setsendMessageText] = useState("Send Message →");
  const [isSubmitting, setisSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setisSubmitting(true);
    setsendMessageText("Message Sending ...");

    try {
      const response = await sendEmail(formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setisSubmitting(false);
      setsendMessageText("Send Message →");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
      setisSubmitting(false);
      setsendMessageText("Send Message →");
    }
  }

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="w-full pt-32 pb-16 px-6 text-center bg-bg-dark">
        <div className=" max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase">
              {contactInfo.title}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-surface leading-tight">
              My Inbox <br />
              <span className="text-dark-accent">Is Open</span>
            </h1>
            <p className="text-lg font body text-nav">
              {contactInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              {contactInfo.descriptionTags.map((tag) => (
                <span className="text-xs text-nav font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-border/20"></div>
      {/* mail section */}
      <section className="w-full py-20 px-6 ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 pt-10">
          {/* Left section form */}
          <div className="bg-white rounded-2xl p-6">
            <div className="pb-10">
              <h3 className="text-surface font-bold font-display text-xl lg:text-3xl py-4">
                Send me a message
              </h3>
              <div className="w-16 h-1 rounded-full bg-accent"></div>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full min-h-45 sm:min-h-55 rounded-xl border border-gray-200 bg-white pl-11 pr-4 pt-4 text-sm sm:text-base outline-none resize-none transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto h-12 sm:h-14 px-8 rounded-xl bg-dark-accent text-white font-medium transition-all duration-300 cursor-pointer hover:bg-accent active:scale-95 ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer hover:bg-accent active:scale-95"
                } `}
              >
                {sendMessageText}
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className=" rounded-2xl border border-border/10 p-6 bg-bg-dark">
            <div className="text-surface font-bold font-display text-xl lg:text-2xl py-4 flex flex-col gap-4 ">
              <h3 className="">Other ways to reach me</h3>
              <div className="w-16 h-1 rounded-full bg-accent"></div>
            </div>
            <div className=" flex flex-col gap-5 pt-12">
              {contactInfo.socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group px-2"
                  >
                    <Icon className="h-6 w-6  mt-0.5 text-dark-accent self-center " />

                    <div>
                      <p className="text-sm lg:text-md text-nav">
                        {social.label}
                      </p>

                      <p className="text-md lg:text-lg font-semibold  text-dark-accent group-hover:underline underline-offset-2">
                        {social.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="w-full mt-10 h-px bg-border/20"></div>
            <div className="px-2 py-4  rounded-2xl bg-bg mt-10">
              <div className="text-nav">
                <p className="pt-2">`{quote.quote}`</p>
                <div className="pt-4 w-full text-surface text-right">
                  --{quote.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
