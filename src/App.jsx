import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import AppRoutes from './routes/AppRoutes'; // Import routes setup
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      {/* Global SEO with react-helmet */}
      <Helmet>
        {/* Global Title */}
        <title>Woodies Online | Premium Handmade Wooden Products</title>

        {/* Global Meta Tags */}
        <meta name="description" content="Shop premium handmade wooden products at Woodies Online. Discover beautifully crafted furniture and home decor tailored to perfection." />
        <meta name="keywords" content="wooden furniture, handmade wooden products, carpentry, custom furniture, home decor" />
        <meta name="author" content="Woodies Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Woodies Online | Premium Handmade Wooden Products" />
        <meta property="og:description" content="Discover the beauty of handcrafted wooden products, furniture, and home decor at Woodies Online." />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="https://woodiesonline.com/favicon.ico" />
      </Helmet>

      {/* Routing setup */}
  
      <AppRoutes />
    </>
  );
}

export default App;
