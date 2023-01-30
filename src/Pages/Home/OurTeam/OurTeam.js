import React from "react";
import img1 from  '../../../assets/images/team/1.jpg';
import img2 from  '../../../assets/images/team/2.jpg';
import img3 from  '../../../assets/images/team/3.jpg';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const OurTeam = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <p className="text-xl text-orange-500 font-bold mb-5">Team</p>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="w-1/2 mx-auto mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          .{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-20 mb-4">

        <div className="card card-compact  bg-base-100 shadow-xl p-4 lg:w-[380px] mx-auto">
          <figure>
            <img
              src={img1}
              className='rounded-lg'
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
              <h2 className="text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-2xl font-semibold">Engine Expert</p>
              <div className="flex justify-center items-center">
                    <BsFacebook className="text-3xl mr-1"/>
                    <AiFillTwitterCircle className="text-3xl mr-1"/>
                    <AiFillLinkedin className="text-3xl mr-1"/>
                    <FaInstagramSquare className="text-3xl mr-1"/>
              </div>
          </div>
        </div>

        <div className="card card-compact  bg-base-100 shadow-xl p-4 lg:w-[380px] mx-auto">
          <figure>
            <img
              src={img1}
              className='rounded-lg'
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
              <h2 className="text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-2xl font-semibold">Engine Expert</p>
              <div className="flex justify-center items-center">
                    <BsFacebook className="text-3xl mr-1"/>
                    <AiFillTwitterCircle className="text-3xl mr-1"/>
                    <AiFillLinkedin className="text-3xl mr-1"/>
                    <FaInstagramSquare className="text-3xl mr-1"/>
              </div>
          </div>
        </div>

        <div className="card card-compact  bg-base-100 shadow-xl p-4 lg:w-[380px] mx-auto">
          <figure>
            <img
              src={img1}
              className='rounded-lg'
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
              <h2 className="text-3xl font-bold">Car Engine Plug</h2>
              <p className="text-2xl font-semibold">Engine Expert</p>
              <div className="flex justify-center items-center">
                    <BsFacebook className="text-3xl mr-1"/>
                    <AiFillTwitterCircle className="text-3xl mr-1"/>
                    <AiFillLinkedin className="text-3xl mr-1"/>
                    <FaInstagramSquare className="text-3xl mr-1"/>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;
