import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';

const ShopTab = () => {
  const {user} = useContext(AuthContext)
  const [datas, setData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const [category, setCategory] = useState([]);
  const [test, setTest] = useState(0);

  useEffect(() => {
    fetch("https://toy-car-server-bay.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [datas]);

  useEffect(() => {
    fetch("https://toy-car-server-bay.vercel.app/categoryToy")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    const reami = datas?.filter((dt) => dt.category == "sports car");
    if (test === 0) {
      setTabData(reami);
    }
  }, [datas]);

  const handleTabClick = (tabName) => {
    const filterData = datas.filter((dt) => dt.category == tabName);
    setTest(1);
    setTabData(filterData);
    console.log(filterData);
  };

const checkUser =()=>{
  if(!user){
    return Swal.fire({
      title: 'You have to log in first to view details',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}

  return (

    <div className="md:w-2/4 w-full mx-auto my-20">
      <h1 className="text-4xl text-center mb-6">Shop By<span className="text-[#7ca005]"> Category</span></h1>
        <Tabs>
          <TabList>
            {category.map((cate) => (
              <Tab key={cate._id} onClick={() => handleTabClick(cate.name)}>
                {cate.name}
              </Tab>
            ))}
          </TabList>
          <div>
            {category.map((cate) => (
              <TabPanel key={cate._id}>
                <div className="grid md:grid-cols-3 gap-5">
                  {tabData.map((td) => (
                    <div key={td._id} className="w-full">
                      <div className="card  bg-base-100 shadow-xl">
                        <div className="overflow-hidden md:w-5/6">
                          <img
                            src={td.photo}
                            className="w-full h-40 object-cover"
                            alt="Shoes"
                          />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title">{td.name}</h2>
                          <p>
                            <span>Price:</span>
                            {td.price}
                          </p>

                          <div className="flex">
                            <Rating
                              style={{ maxWidth: 120 }}
                              value={Math.round(td.rating)}
                              readOnly
                            />
                            <span>{td.rating}</span>
                          </div>
                          <div className="card-actions justify-end">
                            <Link to={`/details/${td._id}`}>
                              <button onClick={checkUser} className="btn bg-[#86ab0b] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD]">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
  );
};

export default ShopTab;
