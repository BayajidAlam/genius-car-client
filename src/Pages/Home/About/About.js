import React from "react";
import person from '../../../assets/images/about_us/parts.jpg'
import parts from '../../../assets/images/about_us/person.jpg'
const About = () => {
  return (
    <div className="hero h-[560px] mb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
            src={parts}
            className="w-4/5 h-full rounded-lg shadow-2xl "
            alt="/"
          />
          <img
            src={person}
            className="w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl absolute"
            alt="/"
          />
        </div>
        <div className="lg:w-1/2">
            <div className="lg:ml-5">
            <p className="text-2xl pt-4 text-orange-500 font-bold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="pt-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="my-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>

          <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
