import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

// Sample products data
const products = [
  {
    id: 1,
    name: "Wooden Table",
    description: "A beautifully crafted wooden table made from eco-friendly wood.",
    price: "$150",
    category: "Furniture",
  },
  {
    id: 2,
    name: "Wooden Chair",
    description: "Comfortable and durable wooden chair perfect for any home.",
    price: "$100",
    category: "Furniture",
  },
  {
    id: 3,
    name: "Wooden Shelf",
    description: "A stylish wooden shelf to organize your books and decor.",
    price: "$75",
    category: "Storage",
  },
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return
    <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>;
    
  }

  return (
    <>
      <SEO
        title={`${product.name} | Woodies Online`}
        description={`Buy ${product.name} - ${product.description}`}
        keywords={`${product.category}, ${product.name}, handmade wooden furniture`}
      />

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        <p className="text-lg font-semibold text-gray-700 mt-6">{product.price}</p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg mt-6">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
