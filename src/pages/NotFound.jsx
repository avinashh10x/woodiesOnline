import React from 'react';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Woodies Online"
        description="Oops! The page you're looking for doesn't exist. Return to the homepage to explore our amazing handmade wooden furniture."
        keywords="404, page not found, woodies online"
      />
      
      <div className="h-screen flex justify-center items-center bg-gray-100 flex-col text-center">
        {/* Image */}
        <img
          src="https://media3.giphy.com/media/lqFHf5fYMSuKcSOJph/200.webp?cid=ecf05e47z847h0gui9gcc6ruvai6nr4mh15a8d060kyutj0k&ep=v1_gifs_search&rid=200.webp&ct=g"
          alt="404"
          className="w-64 mb-8"
        />

        {/* Error message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button to go back to homepage */}
        <a
          href="/"
          className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Go Back to Homepage
        </a>
      </div>
    </>
  );
}

export default NotFound;
