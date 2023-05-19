import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#f6f7f0] md:h-[700px]">
      <div className="md:container md:mx-auto md:flex gap-6 justify-around items-center  md:h-full">
        <div>
          <h1 className="text-6xl mb-8">
            A little{" "}
            <span className="text-[#7ca005]">
              {" "}
              car <br /> will bring{" "}
            </span>
            <br /> your dreams{" "}
          </h1>
          <p>
            A toy car is a miniature replica of a real car or a fictional
            vehicle designed for play or collection <br /> purposes.Toy cars offer a fun and engaging way for both children and adults to explore their love <br /> for automobiles, whether through play or collecting.
          </p>
          <button className="btn mt-8 bg-[#ccea6a] border-0 hover:text-[#69860c] hover:bg-[#dfc98f] text-black">Explore Now</button>
        </div>
        <div className="md:h-[700px] md:w-2/4">
          <img className="md:h-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
