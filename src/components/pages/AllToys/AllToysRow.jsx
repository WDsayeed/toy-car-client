import React, { createContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const AllToysRow = ({ toy, index }) => {
  const {user} = createContext(AuthContext)
  const { _id, seller, name, category, price, quantity } = toy;
  return (
    <tr>
     <td>{index + 1}</td>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/details/${_id}`}>
          <button className="btn btn-outline hover:border hover:border-[#92b538] hover:text-[#769e13] hover:bg-white bg-[#92b538] text-white">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
