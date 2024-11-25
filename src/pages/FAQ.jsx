import React, { useState } from 'react';
import SEO from '../components/SEO';

const faqData = [
  {
    question: "What is Woodies Online?",
    answer: "Woodies Online is a premium provider of handmade wooden furniture and home decor, focusing on sustainable practices and craftsmanship."
  },
  {
    question: "How do I place an order?",
    answer: "Simply browse our collection online and click 'Add to Cart' on your desired items. Once you're ready, proceed to checkout to place your order."
  },
  {
    question: "Do you offer custom furniture designs?",
    answer: "Yes! We offer custom carpentry services. You can share your design ideas with us, and our skilled artisans will bring them to life."
  },
  {
    question: "What materials are used in your products?",
    answer: "We use high-quality, eco-friendly wood, sourced sustainably. Our furniture is designed to be both beautiful and durable."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary depending on the product and your location. Once your order is placed, you will receive an estimated delivery date."
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="FAQ - Woodies Online | Handmade Wooden Furniture"
        description="Find answers to frequently asked questions about Woodies Online's handmade furniture, custom designs, orders, and delivery."
        keywords="FAQ, woodies online, handmade furniture, custom designs, wooden furniture FAQs"
      />

      {/* Hero Section */}
      <div className="hero bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1678000616480-d4a041e6eba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFxfGVufDB8fDB8fHww")' }}>
        <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      </div>


      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-t-lg"
              >
                {faq.question}
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen px-6 py-6' : 'max-h-0 py-0 px-6 overflow-hidden'}`}
                style={{ transitionProperty: 'max-height, padding' }}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Contact Section */}
       <div className="container mx-auto px-6 py-16 bg-gray-200 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have Questions?</h3>
        <p className="text-lg text-gray-600 mb-6">Contact us for more assistance or custom inquiries.</p>
        <a href="/contact" className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg">Contact Us</a>
      </div>

      {/* Additional Resources Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-100">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Explore More Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="bg-green-600 text-white py-6 px-8">
              <h4 className="text-xl font-semibold">Blog</h4>
              <p className="text-md">Read our latest posts for tips, trends, and updates on all things related to woodworking and furniture.</p>
            </div>
            <div className="px-8 py-6">
              <a href="/blog" className="text-green-600 font-semibold hover:underline">Visit our Blog</a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="bg-green-600 text-white py-6 px-8">
              <h4 className="text-xl font-semibold">Product Guides</h4>
              <p className="text-md">Explore our comprehensive guides for understanding our products and how to use them in your home.</p>
            </div>
            <div className="px-8 py-6">
              <a href="/guides" className="text-green-600 font-semibold hover:underline">View Guides</a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
            <div className="bg-green-600 text-white py-6 px-8">
              <h4 className="text-xl font-semibold">Video Demonstrations</h4>
              <p className="text-md">Watch videos that showcase our products in action and get a closer look at their features and quality.</p>
            </div>
            <div className="px-8 py-6">
              <a href="/videos" className="text-green-600 font-semibold hover:underline">Watch Now</a>
            </div>
          </div>
        </div>
      </div>


     
    </>
  );
}


export default FAQ;
