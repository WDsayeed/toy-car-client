import banner from '../../../assets/images/banner.png'

const Banner = () => {
        return (
                <div className='nd:container md:mx-auto md:flex gap-6 justify-center items-center bg-[#f6f7f0] p-'>
                     <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ducimus optio quas expedita est repellat voluptatibus aut minima error labore.</div>   
                     <div className='md:h-3/4'>
                        <img className='full' src={banner} alt="" />
                     </div>   
                </div>
        );
};

export default Banner;