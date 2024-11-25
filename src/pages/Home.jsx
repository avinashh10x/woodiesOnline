import React from "react";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Woodies Online | Handmade Wooden Furniture & Home Decor"
        description="Shop premium handmade wooden furniture, decor, and custom carpentry solutions at Woodies Online. Bring elegance to your home with unique wooden designs."
        keywords="handmade wooden furniture, premium wooden decor, custom carpentry, home decor, wooden furniture online"
      />
      <main className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center px-6"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1675183556347-02f4377edd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHx3b29kZW4lMjBiZ3xlbnwwfHwwfHx8MA%3D%3D)",
          }}
        >
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Premium Handmade Wooden Furniture & Decor
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-700">
              Discover beautifully crafted wooden products tailored to perfection for your home and office.
            </p>
            <a
              href="#products"
              className="mt-6 inline-block bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-700 transition"
            >
              Shop Now
            </a>
          </div>
        </section>


        {/* Categories Section */}
        <section id="categories" className="py-16 px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Cards */}
            <CategoryCard
              title="Handcrafted Furniture"
              description="Elegant and durable furniture for every room."
              image="https://images.unsplash.com/photo-1511795617213-5dda68cf4d19?w=500&auto=format&fit=crop&q=60"
            />
            <CategoryCard
              title="Wooden Decor"
              description="Unique decor pieces to elevate your space."
              image="https://images.unsplash.com/photo-1511795617213-5dda68cf4d19?w=500&auto=format&fit=crop&q=60"
            />
            <CategoryCard
              title="Custom Carpentry"
              description="Personalized designs made just for you."
              image="https://images.unsplash.com/photo-1511795617213-5dda68cf4d19?w=500&auto=format&fit=crop&q=60"
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-600 py-16 px-6  shadow-lg text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Transform Your Home Today
          </h2>
          <p className="mt-4 text-lg">
            Browse our collection of premium wooden furniture and decor or get custom-made pieces tailored for you.
          </p>
          <a
            href="#products"
            className="mt-6 inline-block bg-white text-green-600 py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </section>

        {/* Featured Products Section */}
        <section id="featured" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Product Cards */}
            <ProductCard
              name="Oakwood Dining Table"
              price="₹15,999"
              image="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
              rating={4.5}
            />
            <ProductCard
              name="Rustic Coffee Table"
              price="₹7,499"
              image="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
              rating={4.8}
            />
            <ProductCard
              name="Vintage Wooden Chair"
              price="₹4,999"
              image="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
              rating={4.7}
            />
          </div>
        </section>

        {/* Why Choose Us / About Us Section */}
        <section id="about" className="py-16 px-6 bg-green-600 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Woodies Online?</h2>

          <p className="mt-4 text-lg lg:text-xl mb-8">
            At Woodies Online, we combine craftsmanship, quality, and sustainable practices to deliver timeless wooden pieces that elevate your space. Our passion for woodwork ensures each product is carefully crafted to perfection, designed to last, and tailored to meet your unique needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-semibold">Handcrafted Excellence</h3>
              <p className="text-lg text-gray-200">
                Every piece of furniture and decor is handmade with the utmost care, ensuring quality and precision in every cut and joint.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L12 12L4 12M12 2L12 12M20 12L12 12" />
              </svg>
              <h3 className="text-xl font-semibold">Sustainable Materials</h3>
              <p className="text-lg text-gray-200">
                We prioritize the use of eco-friendly materials that not only help reduce our carbon footprint but also create durable and long-lasting furniture.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M7 12h10" />
              </svg>
              <h3 className="text-xl font-semibold">Top-Notch Quality</h3>
              <p className="text-lg text-gray-200">
                Our commitment to quality means each product undergoes strict quality control checks, ensuring you receive the best possible craftsmanship.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-lg lg:text-xl text-gray-200">
              Whether you're looking for custom carpentry or ready-made furniture, Woodies Online offers the perfect blend of style, functionality, and sustainability to transform your home.
            </p>
          </div>
        </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-6 bg-white">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Singh"
              review="The furniture is amazing! The craftsmanship and quality exceeded my expectations."
              image="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <TestimonialCard
              name="Aman Sharma"
              review="Beautiful decor pieces that added so much elegance to my home!"
              image="https://randomuser.me/api/portraits/men/33.jpg"
            />
            <TestimonialCard
              name="Neha Gupta"
              review="The custom carpentry service was excellent. Got exactly what I wanted!"
              image="https://randomuser.me/api/portraits/women/22.jpg"
            />
          </div>
        </section>



        {/* Newsletter Subscription Section */}
        <section id="newsletter" className="bg-gray-200 py-16 px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Our Latest Collections
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Sign up for our newsletter and be the first to know about new arrivals and exclusive offers.
          </p>
          <form className="max-w-md mx-auto">
            <input type="email" placeholder="Your Email" className="px-4 py-2 w-full rounded-lg text-gray-700" />
            <button type="submit" className="mt-4 inline-block bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-700 transition">
              Subscribe
            </button>
          </form>
        </section>


      </main>
    </>
  );
};

// Helper Components
const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  </div>
);

const ProductCard = ({ name, price, image, rating }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-green-600 font-bold">{price}</p>
      <p className="mt-1 text-yellow-500">Rating: {rating} ★</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, review, image }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full mx-auto mb-4"
    />
    <p className="text-gray-700 italic">"{review}"</p>
    <h4 className="mt-4 font-semibold text-gray-900">{name}</h4>
  </div>
);

export default Home;
