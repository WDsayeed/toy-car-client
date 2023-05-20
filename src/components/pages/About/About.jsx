import aboutImg from "../../../assets/images/about.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  return (
    <div className="flex md:container md:items-center mx-auto mt-40 mb-20 gap-5 w-full">
      <div className="w-2/4">
        <h1 className="text-4xl mb-5">About <span className=" text-[#7ca005]">TOYCARHUB</span></h1>
        <p className="mb-5">Toy Car Hub is an online platform dedicated to all things related to toy cars. It serves as a comprehensive hub for toy car enthusiasts, collectors, and individuals looking to explore and purchase toy cars.</p>
        <p>Toy Car Hub aims to provide a one-stop destination for toy car enthusiasts, collectors, and individuals interested in exploring the world of toy cars. It combines a wide selection of products, community engagement, educational content, and resources to cater to the diverse interests and needs of toy car enthusiasts.</p>
      
      </div>
      <div  className="1/2">
        <img className="rounded-lg w-full" data-aos="zoom-in" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
