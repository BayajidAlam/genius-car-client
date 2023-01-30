import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, title, price } = service;
  return (
    <div className="card lg:w-96 glass">
      <figure>
        <img
          src={img}
          className="p-4 rounded"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
        <p className="text-2xl text-orange-600 font-semibold">Price: ${price}</p>
        <AiOutlineArrowRight className="text-orange-600 text-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
