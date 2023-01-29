import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";

const BannerItem = ({slide}) => {
  const {id,image,next,prev} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="/" />
      </div>
      {/* top section  */}
      <div className="absolute flex transform -translate-y-1/2 top-1/4 left-24">
        <h1 className="text-6xl font-bold text-white">
          Affordable
          <br />
          Price For Car
          <br />
          Servicing
        </h1>
      </div>
      {/* second top section  */}
      <div className="absolute flex transform -translate-y-1/2 top-1/2 left-24">
        <p className="text-white w-1/2 text-lg">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      {/* last section of banner  */}
      <div className="absolute flex transform -translate-y-1/2 top-3/4 left-24">
        <button className="btn btn-warning mr-5">Discover More</button>
        <button className="btn btn-outline btn-success">Latest Project</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          <BiLeftArrowAlt className="text-white" />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          <AiOutlineArrowRight className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
