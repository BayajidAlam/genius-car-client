import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold text-orange-600 mb-6">Services</p>
        <h2 className="lg:text-5xl font-semibold mb-6">Our Service Area</h2>
        <p className="lg:w-3/5 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <button className=" text-xl font-semibold text-orange-600 my-6 btn btn-outline border-orange-600 hover:bg-white hover:text-orange-600">More Service</button>
      </div>
    </div>
  );
};

export default Services;
