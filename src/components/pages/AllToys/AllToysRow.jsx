import React, { createContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AllToysRow = ({ toy }) => {
  const {user} = createContext(AuthContext)
  const { _id, seller, name, category, Price, quantity } = toy;
  return (
    <tr>
     
      <td>{seller}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{Price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/details/${_id}`}>
          <button className="btn bg-[#86ab0b] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD]">View Details</button>
        </Link>
      </td>
      <td>
        {/* The button to open modal */}
        <a href="#my-modal-2" className="btn">
          open modal
        </a>

        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              Youve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <a href="#" className="btn">
                Yay!
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AllToysRow;
