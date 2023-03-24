import React, { useEffect, useState } from "react";
import SingleRifle from "../SignleRifle/SingleRifle";

const AllRifle = ({countIncrease}) => {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="my-5">
        <h1 className="text-4xl text-center  font-bold mt-4 mb-4 text-orange-400 ">
          Welcome To Rifle Store
        </h1>
        <p className="px-8 text-center font-medium mb-12">
          Find the largest selection of guns for sale. Shop shooting accessories
          including ammo, mags, holsters, and more on Rifle.com.Shop the best
          collection of new and used handguns online at Rifle.com.
        </p>
      </div>
      <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guns.map((gun) => (
          <SingleRifle gun={gun} countIncrease={countIncrease}></SingleRifle>
        ))}
      </div>
    </div>
  );
};

export default AllRifle;
