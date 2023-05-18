import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { _id, seller, toyname, sub_category, Price, available_quantity } = toy;
  return (
    <tr>
      <th>
        <button className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>{seller}</td>
      <td>{toyname}</td>
      <td>{sub_category}</td>
      <td>{Price}</td>
      <td>{available_quantity}</td>
      <td>
        <Link to="">
          <button className="btn bg-[#91b421]">View Details</button>
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
