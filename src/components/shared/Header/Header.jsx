import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from "react-tooltip";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-[#CCD5AE]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
            </li>
            <li>
            <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  All Toys
                </NavLink>
            </li>
            <li>
             
              <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  My Toys
                </NavLink>
            </li>
            <li>
             
              <NavLink
                  to="/addToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Add a Toy
                </NavLink>
            </li>
            <li>
              
              <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Blog
                </NavLink>
            </li>
          </ul>
        </div>
        <div className='w-20'>
                <img className='w-full' src={logo} alt="" />
        </div>
        <a className=" font-bold font-mono text-3xl">Toy<span className="text-[#825e03]">car</span>Hub </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
          </li>
          
          <li>
           
            <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  All Toys
                </NavLink>
          </li>
          <li>
            <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  My Toys
                </NavLink>
          </li>
          <li>
            
            <NavLink
                  to="/addToys"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Add a Toys
                </NavLink>
          </li>
          <li>
          
            <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Blog
                </NavLink>
          </li>
          <li>
          
            <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-white font-semibold" : ""
                  }
                >
                  Register
                </NavLink>
          </li>
        </ul>
      </div>
     
      <div className="navbar-end">
          {user && (
            <div className="md:flex-none gap-2 mr-2 ">
              <div className="w-10  rounded-full ">
                <img
                className="rounded-full h-10 ring-2 ring-purple-600"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  src={user?.photoURL}
                />
                {/* <Tooltip></Tooltip> */}
                {user.displayName && <Tooltip  id="my-tooltip"></Tooltip>}
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn hover:border hover:bg-[#CCD5AE] hover:text-[#465b03] bg-[#977d3c] text-black"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className=" hover:border hover:border-purple-900 hover:text-purple-800 bg-purple-600 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      
    </div>
  );
};

export default Header;
