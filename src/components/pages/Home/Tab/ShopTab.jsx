import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShopTab = () => {
  const [datas, setData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const [category, setCategory] = useState([]);
  const [test, setTest] = useState(0);

  // console.log(activeTab)
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [datas]);

  useEffect(() => {
    fetch("http://localhost:5000/categoryToy")
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

  return (
    <div>
      <div className="md:w-2/4 mx-auto">
        <Tabs>
          <TabList>
            {category.map((cate) => (
              <Tab key={cate._id} onClick={() => handleTabClick(cate.name)}>
                {cate.name}
              </Tab>
            ))}

            {/* <Tab>
              <div onClick={() => handleTabClick("mini police car")}>
                Mini police car
              </div>
            </Tab>
            <Tab>
              <div onClick={() => handleTabClick("truck")}>Truck</div>
            </Tab> */}
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
                            className="w-full object-cover"
                            alt="Shoes"
                          />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title">{td.name}</h2>
                          <p>
                            <span>Price:</span>
                            {td.price}
                          </p>
                          {/* <p><span>Rating:</span>{td.rating}</p> */}
                          <div className="flex">
                            <Rating
                              style={{ maxWidth: 120 }}
                              value={Math.round(td.rating)}
                              readOnly
                            />
                            <span>{td.rating}</span>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn bg-[#86ab0b] border-0 hover:text-[#69860c] hover:bg-[#FAEDCD]">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>

          {/* {
          datas.map(data=> <SingleTab
            key={data._id}
            data={data}
            handleTabClick={handleTabClick}
            ></SingleTab>)
        }
     */}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopTab;
