import React from "react";
import Swal from "sweetalert2";

const MyToysRow = ({ toy, handleDelete }) => {
  const {
    _id,
    photo,
    name,
    seller,
    email,
    rating,
    quantity,
    description,
    category,
    price,
  } = toy;

 
  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle">
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
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-24 ">
              <img src={photo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{seller}</td>
      {/* <td>{name}</td> */}
      <td>{email}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default MyToysRow;
