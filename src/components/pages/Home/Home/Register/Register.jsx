import { useContext, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import regImg from "../../../../../assets/images/login-removebg-preview.png";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setErrorPassword("Password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        (createdUser.photoURL = photo), (createUser.displayName = name);
        setErrorPassword("");
        form.reset();
        console.log(createdUser);

        const userInfo = {
          displayName: name,
          photoURL: photo,
        };
        updateUser(userInfo).then(() => {
          console.log("profile updated");
        });

        navigate("/");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  w-full lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img className="bg-[#E9EDC9] w-full rounded-md" src={regImg} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Please Register
          </h1>
          <Form
            className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleRegister}
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <p className="text-red-700">{errorPassword}</p>
              <div className="form-control mt-6">
                <button className="btn hover:bg-[#E9EDC9] hover:text-[#698707] bg-[#a7bd5e] text-white border-0">Register</button>
              </div>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
