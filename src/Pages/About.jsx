import React from "react";
import Marquee from "react-fast-marquee";
import c1 from "../assets/company1.png";
import c2 from "../assets/company2.png";
import c3 from "../assets/company3.png";
import c4 from "../assets/company5.png";
import c5 from "../assets/company6.png";
import c6 from "../assets/company7.png";
import c7 from "../assets/company8.png";

const About = () => {
  return (
    <div>
      <title>Game-Hub | About</title>
      {/*communication */}
      <div>
        <div>
          <h1 className="text-4xl my-3 font-bold text-center">
            Communication process
          </h1>
          <p className="text-center my-3">
            Strong communication is the driving force for everything you do at
            work. As a project manager, it's your responsibility to set the tone
            for how your team members communicate with one another.
          </p>
        </div>
        <div>
          <Marquee pauseOnHover={true} speed={60}>
            <img className="w-[250px] mr-2" src={c1} alt="" />
            <img className="w-[250px] mr-2" src={c2} alt="" />
            <img className="w-[250px] mr-2" src={c3} alt="" />
            <img className="w-[250px] mr-2" src={c4} alt="" />
            <img className="w-[250px] mr-2" src={c5} alt="" />
            <img className="w-[250px] mr-2" src={c6} alt="" />
            <img className="w-[250px] mr-2" src={c7} alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
