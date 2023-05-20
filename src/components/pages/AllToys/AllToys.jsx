import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState('')
  useTitle("AllToys");
  useEffect(() => {
    fetch("https://toy-car-server-bay.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = ()=>{
    fetch(`https://toy-car-server-bay.vercel.app/toySearch/${searchText}`)
    .then(res=> res.json())
    .then(data=> {
      setAllToys(data)
    })
  }

  return (
    <div className="overflow-x-auto w-full md:container mx-auto my-10">
      <h1 className="text-4xl text-center mb-10">
        All <span className="text-[#86ab0b]">Toys</span>{" "}
      </h1>

      <div className="flex items-center justify-center gap-3 mb-10">
      <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
      <button onClick={handleSearch} className="btn btn-outline border hover:border-0 border-[#92b538] text-[#769e13] hover:bg-[#92b538] bg-white hover:text-white">Search</button>
      </div>

      <table className="table table-zebra w-full">
        <thead className="w-full">
          <tr>
            <th>Name</th>
            <th>TOY NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="my-5">
          {allToys.map((toy,index) => (
            <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
