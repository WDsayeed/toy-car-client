import { FaMapMarkerAlt,FaMobileAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div>
        <h1 className="text-4xl text-center mb-10 my-28">Contact <span className="text-[#7ca005]">Us</span></h1>
      <div className="md:flex md:justify-between w-full md:container mx-auto">
        
          <div className="card w-full md:w-1/4 bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure className="px-10 pt-10">
                <div className="btn btn-circle btn-outline hover:bg-[#ccea6a] hover:text-white hover:border-0 text-[#7ca005]">
              <FaMapMarkerAlt></FaMapMarkerAlt>

                </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">OUR LOCATION</h2>
              <p>(500) 123 556 789 / (600) 123 456 789</p>
              <p>toycar@gmail.com</p>
            </div>
          </div>
     
        
          <div className="card w-full md:w-1/4 bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure className="px-10 pt-10">
              <div className="btn btn-circle btn-outline hover:bg-[#ccea6a] hover:text-white hover:border-0 text-[#7ca005]">
                <FaMobileAlt></FaMobileAlt>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">CONTACT US ANYTIME</h2>
              <p>Mobile: 013 00 22 33</p>
              <p>Fax: 123 456 789</p>
            </div>
          </div>
       
    
          <div className="card w-full md:w-1/4 bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure className="px-10 pt-10">
            <div className="btn btn-circle btn-outline hover:bg-[#ccea6a] hover:text-white hover:border-0 text-[#7ca005]">
                <BsEnvelope></BsEnvelope>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">WRITE SOME WORDS</h2>
              <p>Service24/7@active.com info@active.com</p>
            </div>
          </div>
        
      </div>
      <form className="md:container mx-auto my-16">
      <h1 className="text-4xl text-center">
      <span className="text-[#96bf0e]">Get  In</span>  Touch 
      </h1>
      <div className="card-body grid grid-cols-2 gap-10">
       
        <div className="form-control ">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        
        <div className="form-control ">
          
          <input
            type="email"
            placeholder="Email"   
            className="input input-bordered w-full"
          />
        </div>



        <div className="form-control col-span-2 w-full">
          
          <input
            type="text"
          
            placeholder="Write Message"
       
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="text-center w-full ">
        <button className="btn btn-wide bg-[#CCD5AE] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD] text-black">
          SEND A MESSAGE
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;
