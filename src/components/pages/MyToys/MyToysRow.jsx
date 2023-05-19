import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
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

 const handleUpdate = id=>{
        console.log(id)
 }

  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-outline hover:border hover:border-[#92b538] hover:text-[#769e13] hover:bg-white bg-[#92b538] text-white">
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
      <td> <div className="flex">
                            <Rating
                              style={{ maxWidth: 120 }}
                              value={Math.round(rating)}
                              readOnly
                            />
                            <span>{rating}</span>
                          </div></td>
      <th>
        <Link to={`/update/${_id}`}>
        <button onClick={()=> handleUpdate(_id)} className="btn btn-outline hover:border hover:border-[#92b538] hover:text-[#769e13] hover:bg-white bg-[#92b538] text-white">Edit</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
