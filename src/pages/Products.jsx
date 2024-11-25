import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wooden Table",
    description: "A beautifully crafted wooden table made from eco-friendly wood.",
    price: "$150",
  },
  {
    id: 2,
    name: "Wooden Chair",
    description: "Comfortable and durable wooden chair perfect for any home.",
    price: "$100",
  },
  {
    id: 3,
    name: "Wooden Shelf",
    description: "A stylish wooden shelf to organize your books and decor.",
    price: "$75",
  },
  {
    id: 4,
    name: "Wooden Table",
    description: "A beautifully crafted wooden table made from eco-friendly wood.",
    price: "$150",
  },
  {
    id: 5,
    name: "Wooden Chair",
    description: "Comfortable and durable wooden chair perfect for any home.",
    price: "$100",
  },
  {
    id: 6,
    name: "Wooden Shelf",
    description: "A stylish wooden shelf to organize your books and decor.",
    price: "$75",
  },
  // Add more products as needed
];

function Products() {
  return (
    <>
      <SEO
        title="Woodies Online | Handmade Wooden Furniture"
        description="Discover premium handmade wooden furniture including tables, chairs, shelves, and more."
        keywords="wooden furniture, handmade furniture, tables, chairs, shelves"
      />

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-700 mt-4">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg mt-4 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
