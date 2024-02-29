// Home.js

// Import React and Link from react-router-dom
import React from "react";
import { Link } from "react-router-dom";

// Define the Home component
const Home = () => {
  return (
    // Main container for the Home component
    <div>
      {/* Heading for the Home page */}
      <h2>Welcome to the Home Page</h2>

      {/* Content for the Home page */}
      <p>This is the home page content.</p>

      {/* Navigation buttons for Jesus and Luis */}
      {/* Use Link components for navigation with proper paths and styling */}
      <Link to="/jesus" className="nav-button">
        Jesus
      </Link>
      <Link to="/luis" className="nav-button">
        Luis
      </Link>
    </div>
  );
};

// Export the Home component as the default export
export default Home;