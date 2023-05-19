import React from "react";
import g1 from "../../../../assets/images/g1.jpg";
import g2 from "../../../../assets/images/g2.jpg";
import g3 from "../../../../assets/images/g3.jpg";
import g4 from "../../../../assets/images/g4.jpg";
import g5 from "../../../../assets/images/g5.jpg";
import g6 from "../../../../assets/images/g6.jpg";
import g7 from "../../../../assets/images/g7.jpg";
import g8 from "../../../../assets/images/g8.jpg";
import g9 from "../../../../assets/images/g9.jpg";
const Gallery = () => {
  return (
    <div className="md:container mx-auto my-40">
      <h1 className="text-4xl text-center">Toys <span className="text-[#7ca005] ">Gallery</span></h1>
      <div className="grid md:grid-cols-3 gap-10 mt-14">
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g1} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g2} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g3} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g4} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g5} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g6} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g7} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g8} alt="" />
        </div>
        <div className="w-[450px] overflow-hidden">
          <img className="w-full object-cover h-56 md:h-72 rounded-lg" src={g9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
