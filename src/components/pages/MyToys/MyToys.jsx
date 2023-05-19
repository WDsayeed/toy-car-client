import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle('MyToys')
  const [myToy, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyToys(data)
      });
  }, [user]);

  const handleDelete = (id)=>{
    Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/myToys/${id}`,{
                    method:"DELETE"
            })
            .then(res=> res.json())
            .then(data=> {
                    console.log(data)
                    if(data.deletedCount > 0){
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                            const remaining = myToy.filter(toy=> toy._id !== id)
                            setMyToys(remaining)
                    }
            })
            }
          })
}


  return <div className="overflow-x-auto w-full md:container mx-auto my-10">
    <h1 className="text-4xl text-center mb-7">My <span className="text-[#96bf0e]"> Toys</span></h1>
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       <th></th>
        <th>Name</th>
        <th>Seller</th>
        <th>Seller Email</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
     {
      myToy.map(toy=> <MyToysRow
      key={toy._id}
      toy={toy}
      handleDelete={handleDelete}
      ></MyToysRow>)
     }
    </tbody>
  
  </table>
</div>
};

export default MyToys;
