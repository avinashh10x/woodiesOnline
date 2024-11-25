import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Woodies Online</h3>
          <p className="mt-4 text-gray-400">
            Discover premium handmade wooden furniture and decor tailored to perfection for your home and office. Quality craftsmanship guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:text-green-400 transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>📞 +91 6239378916</li>
            <li>📧 support@woodiesonline.com</li>
            <li>📍 Jalandhar, Punjab, India</li>
          </ul>
          <div className="flex ml-2 mt-4 justify-start gap-8">
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
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-500">
        <p>&copy; 2024 Woodies Online. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
