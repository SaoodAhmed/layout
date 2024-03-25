import React from "react";

const Hero = () => {
  return (
    <div className=" pt-96 max-w-7xl mx-auto">
      <div className=" w-6/12  px-6 ">
        <h1 className="text-5xl leading-snug text-blue-950 mb-4">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
          
        </p>
        <div className="flex gap-x-8 pt-16">
        <button className="px-16 py-2 text-sm  bg-blue-950 text-white rounded-sm">Purchase UI Kit</button>
        <button className="px-16 py-2  text-sm  text-blue-950 border-2 font-medium border-blue-950 rounded-sm">Learn More</button>

        </div>
      </div>
      <div className=" absolute top-0 right-0 -z-20">
        <img src="/images/image.png"  alt=""/>
      </div>
      
    </div>
  );
};

export default Hero;
