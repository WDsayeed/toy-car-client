import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {

  const {signIn, googleSignIn} = useContext(AuthContext)
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
      
    });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
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
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleLogin}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
            <p>New to TOYCARHUB? <Link to='/register'>create an account</Link></p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
