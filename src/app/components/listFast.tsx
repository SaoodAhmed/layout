import React from "react";

const ListFast = () => {
  return (
    <div className="grid grid-cols-[50%,50%] place-items-center px-16">
      <div>
        <h1 className="text-4xl leading-snug mb-4">Light, Fast & Powerful</h1>
        <p className=" text-blue-800">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br/><br/> mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div>
          <div>
            <img src="/images/Icon.png" alt=""/>
            <h4 className="text-xl">Title Goes here</h4>
            <p className=" text-slate-700">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/image-3.png"/>
      </div>
    </div>
  );
};

export default ListFast;
