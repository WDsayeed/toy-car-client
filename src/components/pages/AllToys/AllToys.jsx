import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full md:container mx-auto my-2">
      <table className="table table-zebra w-full">
        <thead className="w-full">
          <tr>
            <th>Name</th>
            <th>TOY NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>

        <tbody className="my-5">
          {allToys.map((toy) => (
            <AllToysRow key={toy._id} toy={toy}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
