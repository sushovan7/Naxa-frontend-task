import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CategoryLists() {
  const projects = useSelector((state) => state.projects.data);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (projects?.length) {
      const allCategories = projects.map((item) => item.category_title).flat(1);
      const uniqueCategories = [...new Set(allCategories)];
      setCategoryList(uniqueCategories);
    }
  }, [projects]);

  return (
    <div className="md:max-w-7xl bg-white relative w-[90vw] md:w-[90vw] -mt-20 z-10  mx-auto px-3 shadow-md  py-4">
      <div className="flex  items-around justify-between flex-wrap gap-4 ">
        <div className="bg-[#FFDC1B] cursor-pointer text-[#124BF4]  flex items-center md:justify-start justify-center w-full  font-lg  text-sm md:w-50 px-3 font-medium">
          Key highlights
        </div>
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="hover:bg-[#FFDC1B] flex items-center flex-wrap md:justify-start justify-center  text-gray-400 font-lg w-full md:w-50 px-3 py-1 text-sm font-medium"
          >
            <div className="hover:text-[#124BF4] cursor-pointer">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryLists;
