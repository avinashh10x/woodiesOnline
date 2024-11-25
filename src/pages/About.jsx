import React from 'react';
import SEO from '../components/SEO';

function About() {
  return (
    <>
      <SEO
        title="Woodies Online | Premium Handmade Wooden Furniture"
        description="Discover premium handmade wooden furniture, home decor, and custom carpentry at Woodies Online. Transform your home with exquisite, sustainable wooden designs."
        keywords="handmade wooden furniture, premium home decor, custom carpentry, sustainable wooden furniture, eco-friendly decor, custom wooden pieces"
      />

      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1675782999298-4ab0615fe7ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHdvb2RlbiUyMGJnfGVufDB8fDB8fHww' }}>
        <h1 className="text-4xl font-bold text-center">Welcome to Woodies Online</h1>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Woodies Online</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          At Woodies Online, we craft timeless wooden furniture and decor that brings warmth, elegance, and a touch of nature into your home. 
          Our passion for woodworking and sustainability is at the heart of every piece we create, ensuring that each product is both beautiful and eco-friendly.
        </p>

        {/* Brand Story */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
          <p className="text-lg text-gray-600 mb-6">
            Founded by a team of artisans and woodworking enthusiasts, Woodies Online was born out of a desire to create high-quality, 
            sustainable furniture that adds a personal touch to your space. We believe that every piece of wood has its own story, 
            and we aim to showcase its beauty through craftsmanship that lasts for generations.
          </p>
          <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1677872086434-b047e07c5032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b29kZW4lMjBiZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Our Story" className="rounded-lg shadow-xl" />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Why Choose Woodies Online?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Handcrafted Excellence</h4>
              <p className="text-gray-600">
                Each of our products is handcrafted with precision and care. We focus on the details to create pieces that stand out.
              </p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Sustainable Practices</h4>
              <p className="text-gray-600">
                We use eco-friendly materials and sustainable sourcing practices to minimize our environmental impact.
              </p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Custom Design Solutions</h4>
              <p className="text-gray-600">
                Have a unique vision? We offer custom carpentry services to bring your ideas to life with quality and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Process</h3>
          <div className="flex justify-center mb-6">
            <img src="https://images.unsplash.com/photo-1663036050191-9dd1e7985b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHx3b29kZW4lMjBiZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Woodwork Process" className="rounded-lg shadow-xl" />
          </div>
          <p className="text-lg text-gray-600 mb-6 text-center">
            We believe in creating products that are not only beautiful but built to last. From carefully selecting the finest wood 
            to the final touches of sanding and finishing, we ensure that every item meets our high standards of quality and craftsmanship.
          </p>
          <p className="text-lg text-gray-600 text-center">
            Each product undergoes a strict quality control process to ensure you receive only the best. Whether you're choosing from 
            our ready-made collection or commissioning a custom piece, you can trust that our dedication to quality and sustainability shines through.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-gray-100 py-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Meet the Team</h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Our team is a blend of skilled artisans, designers, and customer service experts who share a passion for woodworking. 
            Together, we aim to make your home more beautiful with our meticulously crafted furniture and decor.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">Master Craftsman</p>
            </div>
            <div className="text-center">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">Design Specialist</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 text-center bg-green-600 text-white">
          <h3 className="text-2xl font-semibold mb-4">Transform Your Home with Woodies Online</h3>
          <p className="text-lg mb-6">
            Explore our collection of premium wooden furniture and custom designs. Bring nature's beauty into your home today!
          </p>
          <a href="/shop" className="bg-white text-green-600 py-2 px-6 rounded-lg text-lg">Shop Now</a>
        </section>
      </div>
    </>
  );
}

export default About;
