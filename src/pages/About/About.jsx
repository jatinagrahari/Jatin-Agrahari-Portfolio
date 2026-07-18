import React from "react";
import blob from "../../assets/blob.svg";
import Button from "../../components/Ui/Button";
import { Atom, Palette, Smartphone, Gauge } from "lucide-react";

const About = () => {
  const myTags = [
    {
      icon: Atom,
      title: "Clean Code",
    },
    {
      icon: Palette,
      title: "Performance",
    },
    {
      icon: Smartphone,
      title: "UI/UX",
    },
    {
      icon: Gauge,
      title: "Problem Solver",
    },
  ];

  return (
    <div>
      <div className="">
        <div className="">
          {/* left section  */}
          <div className="">
            <h2 className="">i am heading</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel,
              laudantium quaerat necessitatibus eligendi, veritatis id minus
              nulla illum saepe deleniti doloribus optio, corporis numquam
              eveniet repellendus quidem ex iusto officia deserunt architecto
              nemo officiis quod voluptas. Consequatur, aliquid asperiores?
            </p>
            <div className="flex flex-wrap gap-4">
              {myTags.map((tag) => {
                let Icon = tag.icon;

                return (
                  <div className="flex items-center gap-2 px-4 py-3  border/10 rounded-xl shadow-sm">
                    <Icon className="text-dark-accent" />
                    <span>{tag.title}</span>
                  </div>
                );
              })}
            </div>
            <a href="/resume.pdf" download>
              <Button children={"Download resume"} type={"primary"} />
            </a>
          </div>
          <div className="absolute right-0 top-0 ">
            <img src={blob} alt="" className="w-[500px] h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
