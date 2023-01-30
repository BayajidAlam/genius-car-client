import React from "react";
import im1 from "../../../assets/images/products/1.png";
import im2 from "../../../assets/images/products/2.png";
import im3 from "../../../assets/images/products/3.png";
import im4 from "../../../assets/images/products/4.png";
import im5 from "../../../assets/images/products/5.png";
import im6 from "../../../assets/images/products/6.png";
import { AiTwotoneStar } from "react-icons/ai";

const OurProduct = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <p className="text-xl text-orange-500 font-bold mb-5">
          Popular Products
        </p>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="w-1/2 mx-auto mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im1} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im2} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im3} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im4} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im5} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
        <div className="text-center lg:w-[364px] mx-auto">
          <div className="lg:w-[326px] h-[215px] bg-[#F3F3F3] flex justify-center items-center rounded-lg mx-auto">
            <img src={im6} className="w-38 h-36" alt="" />
          </div>
          <div className="flex justify-center">
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
            <AiTwotoneStar className="mx-2 my-2" />
          </div>
          <p className="text-3xl font-bold">Car Engine Plug</p>
          <p className="text-xl font-bold text-orange-600">$20.00</p>
        </div>
      
        
      </div>
      <div className="text-center">
        <button className=" text-xl font-semibold text-orange-600 my-6 btn btn-outline border-orange-600 hover:bg-white hover:text-orange-600">More Products</button>
      </div>
    </div>
  );
};

export default OurProduct;
