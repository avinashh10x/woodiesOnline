import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-6 shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Filter By</h3>
      <ul className="space-y-4">
        <li>
          <h4 className="text-lg font-semibold text-gray-700">Categories</h4>
          <ul className="list-disc pl-5">
            <li>
              <Link to="/category/furniture" className="text-gray-600 hover:text-green-600">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/category/storage" className="text-gray-600 hover:text-green-600">
                Storage
              </Link>
            </li>
            {/* Add more categories */}
          </ul>
        </li>
        <li>
          <h4 className="text-lg font-semibold text-gray-700">Price Range</h4>
          <ul className="list-disc pl-5">
            <li>
              <Link to="/price/under-100" className="text-gray-600 hover:text-green-600">
                Under $100
              </Link>
            </li>
            <li>
              <Link to="/price/100-300" className="text-gray-600 hover:text-green-600">
                $100 - $300
              </Link>
            </li>
            <li>
              <Link to="/price/over-300" className="text-gray-600 hover:text-green-600">
                Over $300
              </Link>
            </li>
          </ul>
        </li>
        {/* Add more filters as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
