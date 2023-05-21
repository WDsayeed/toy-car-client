import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Details = () => {
  useTitle("Details");
  const toyDetails = useLoaderData();
  const { photo, name, seller, rating, quantity, description, email, price } =
    toyDetails;
  return (
    <div className="hero min-h-screen bg-[#e9ece1]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-3xl font-medium">{name}</h1>
          <p className="my-3">
            <span className="font-medium">Seller:  </span>{seller}
          </p>
          <p className="my-3">
            
            <span className="font-medium">Price:   </span>${price}

          </p>
          <p className="my-3">
            
            <span className="font-medium">Quantity:  </span>{quantity}

          </p>
          <div>
            <div className="flex">
            <span className="font-medium">Rating:  </span>
            <Rating
              style={{ maxWidth: 80 }}
              value={Math.round(rating)}
              readOnly
            />
            <span>{rating}</span>
          </div>
          </div>
          <p className="my-3">
           
            <span className="font-medium"> Email:  </span>{email}

          </p>
          <p className="my-3">
            <span className="font-medium">Description:  </span>{description}

          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
