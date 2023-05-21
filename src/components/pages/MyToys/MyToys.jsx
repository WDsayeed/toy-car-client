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
    fetch(`https://toy-car-server-bay.vercel.app/myToys/${user?.email}`)
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
            
            fetch(`https://toy-car-server-bay.vercel.app/myToys/${id}`,{
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

const handleDescending = ()=>{
 
    fetch(`https://toy-car-server-bay.vercel.app/myToysDescending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyToys(data)
      });

}
const handleAscending = ()=>{
 
    fetch(`https://toy-car-server-bay.vercel.app/myToysAscending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyToys(data)
      });

}

// https://i.ibb.co/XJH9Z0z/mini-police-2.jpg
//The Siren Sprint toy car is an exciting and interactive toy designed to resemble a miniature version of a real-life race car. It features vibrant colors, sleek design, and numerous interactive features that provide an engaging play experience for children and enthusiasts alike

  return <div className="overflow-x-auto w-full md:container mx-auto my-10 min-h-full">
    <h1 className="text-4xl text-center mb-7">My <span className="text-[#96bf0e]"> Toys</span></h1>

    <div className=" flex justify-end gap-4 mb-10">
      <button onClick={handleDescending} className="btn btn-outline hover:border hover:border-[#92b538] hover:text-[#769e13] hover:bg-white bg-[#92b538] text-white">High to low price</button>
      <button onClick={handleAscending} className="btn btn-outline border border-[#92b538] text-[#769e13] hover:border-0 hover:bg-[#769e13] hover:text-white">Low to high price</button>
    </div>

  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       <th></th>
       <th>Image</th>
        <th>Name</th>
        <th>Seller</th>
        <th>Seller Email</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th>Edit</th>
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
