
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const Details = () => {
  useTitle('Details')
  const toyDetails = useLoaderData();
  const {
    photo,
    name,
    seller,
    rating,
    quantity,
    description,
    email,
    price,
  } = toyDetails;
  return (
    <div className="hero min-h-screen bg-[#e9ece1]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-medium">{name}</h1>
          <p className="py-">
            Seller: <span>{seller}</span>
          </p>
          <p className="py-">
          Price: <span>{price}</span>
          </p>
          <p className="py-">
          Quantity: <span>{quantity}</span>
          </p>
          <p className="py-">
          Rating: <span>{rating}</span>
          </p>
          <p className="py-">
          Email: <span>{email}</span>
          </p>
          <p className="py-">
          Description: <span>{description}</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
