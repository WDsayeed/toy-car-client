import  { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import loginImage from '../../../../../assets/images/login-removebg-preview.png'
import useTitle from "../../../../../hooks/useTitle";

const Login = () => {

  useTitle('Login')
  const {signIn, googleLogIn} = useContext(AuthContext)
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  if(error){
    return toast.error(error) 
    }

  const handleLogin= event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser)
      
      navigate(from, {replace: true});
      form.reset()
    })
    .catch((error) => {
      setError(error.message)
      console.log(error.message)
    });
  }

  const handleGoogleSignIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        navigate(from, {replace: true});
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex justify-around w-full">
        <div className="text-center lg:text-left">
          <img className="bg-[#E9EDC9] w-full rounded-md" src={loginImage} alt="" />
        </div>
       <div>
        <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
        <Form className="card flex-shrink-0 w-full  shadow-2xl bg-base-100" onSubmit={handleLogin}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn hover:bg-[#E9EDC9] hover:text-[#698707] bg-[#a7bd5e] text-white border-0">Login</button>
            </div>
            <div className="form-control mt-6">
              <button className=" flex items-center justify-center gap-3 btn  hover:bg-[#E9EDC9] hover:text-[#698707] bg-[#a7bd5e] text-white border-0" onClick={handleGoogleSignIn}>
              <FaGoogle className="h-7 w-5 "></FaGoogle>
                
                Google sign In</button>
            </div>
            <p>New to TOYCARHUB? <Link to='/register'>
              <span className="text-[#455804] underline underline-offset-4"> create an account</span></Link></p>
          </div>
        </Form>
       </div>
      </div>
    </div>
  );
};

export default Login;
