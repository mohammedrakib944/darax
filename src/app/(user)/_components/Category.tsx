import React from "react";

const Category: React.FC = () => {
  return (
    <div className="mt-6">
      <h2>Categories</h2>
      <div className="mt-3 grid grid-cols-4 lg:grid-cols-8 gap-1">
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Accessories</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Phone</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">T-shirt</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Watch</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Pants</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Shoes</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Phone Case</span>
        </div>
        <div className="bg-white px-4 py-6 text-center rounded-lg hover:shadow-lg duration-200 cursor-pointer">
          <span className="font-semibold text-sm">Lense</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
