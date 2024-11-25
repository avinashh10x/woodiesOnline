import React from 'react';
import SEO from '../components/SEO';

function Contact() {
  return (
    <>
      <SEO
        title="Contact Woodies Online | Handmade Wooden Furniture"
        description="Get in touch with Woodies Online for inquiries, custom orders, or to learn more about our premium handmade wooden furniture and decor."
        keywords="contact woodies online, get in touch, custom orders, wooden furniture inquiries"
      />

      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1536698988377-ecd14e62f884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWZmaWN8ZW58MHx8MHx8fDA%3D")' }}>
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We'd love to hear from you! Whether you have questions about our products or need custom designs, feel free to send us a message.
        </p>

        <form action="#" method="POST" className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
            <input type="text" id="name" name="name" className="w-full p-3 mt-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 mt-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full p-3 mt-2 border border-gray-300 rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg w-full">Send Message</button>
        </form>
      </div>

      {/* Business Information Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Location & Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Address</h3>
            <p className="text-gray-600">123 Wooden Avenue, Jalandhar, Punjab, India</p>
            <p className="text-gray-600">Pin Code: 144205</p>
          </div>

          {/* Email and Phone */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Info</h3>
            <p className="text-gray-600">Email: <a href="mailto:contact@woodiesonline.com" className="text-green-600">contact@woodiesonline.com</a></p>
            <p className="text-gray-600">Phone: <a href="tel:+919876543210" className="text-green-600">+91 6239378916</a></p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us On The Map</h2>
        <div className="w-full h-64 bg-gray-200">
          {/* Embed Google Map */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d109066.42893264956!2d75.49101774058892!3d31.3223714360371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1732544894360!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d109066.42893264956!2d75.49101774058892!3d31.3223714360371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1732544894360!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Woodies Online Location"
          ></iframe>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay connected with us on social media for the latest updates, new arrivals, and special offers.
        </p>
        <div className="flex justify-center gap-8">
          <a href="https://facebook.com/woodiesonline" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://instagram.com/woodiesonline" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://twitter.com/woodiesonline" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>


      {/* Call to Action Section */}
      <div className="py-12 text-center bg-green-600 text-white">
        <h3 className="text-2xl font-semibold mb-4">Let’s Bring Nature to Your Home</h3>
        <p className="text-lg mb-6">
          Get in touch with us today and start your journey with Woodies Online for premium handmade wooden furniture.
        </p>
        <a href="/shop" className="bg-white text-green-600 py-2 px-6 rounded-lg text-lg">Explore Our Collection</a>
      </div>
    </>
  );
}

export default Contact;
