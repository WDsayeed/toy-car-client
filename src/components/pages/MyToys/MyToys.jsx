import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [myToy, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyToys(data)
      });
  }, [user]);

  return <div className="overflow-x-auto w-full md:container mx-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
     {
      myToy.map(toy=> <MyToysRow
      key={toy._id}
      toy={toy}
      ></MyToysRow>)
     }
    </tbody>
  
  </table>
</div>
};

export default MyToys;
