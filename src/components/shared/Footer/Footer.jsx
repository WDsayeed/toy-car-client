import { FaGithub, FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/images/logo-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Footer = () => {
  const {googleLogIn} = useContext(AuthContext)
  const handleGoogleLoginIn = ()=>{
    googleLogIn()
    .then(result=>{
      const user = result.user
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  return (
    <div>
      <footer className="footer p-10 bg-[#E9EDC9] text-base-content">
        <div>
          <span className="footer-title">Customer Care</span>
          <p className="link link-hover">Help Center</p>
          <p className="link link-hover">How to Buy</p>
          <p className="link link-hover">Terms & Conditions</p>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <p className="link link-hover">House #8, Road # 14,</p>
          <p className="link link-hover">Dhanmondi, Dhaka-1209.</p>
          <p className="link link-hover">Email: toycar@gmail.com</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#FEFAE0] text-base-content border-base-300">
        <div className="items-center grid-flow-col">
         <div className='w-14'>
                <img className='w-full' src={logo} alt="" />
         </div>
          <p>
            <span className='font-semibold'>TOYCARHUB.COM</span> <br />
            A toy car hub refers to a central location or facility that specializes in the display, sale, and promotion of toy cars. 
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
          <button
                  onClick={handleGoogleLoginIn}
                  className="btn btn-circle btn-outline hover:border hover:border-[#92b538] hover:text-[#769e13] hover:bg-white bg-[#92b538] text-white"
                >
                  <FaGoogle className="h-7 w-5"></FaGoogle>
                 
                </button>
                
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
