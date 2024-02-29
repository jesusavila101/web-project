// App.js

// Import necessary modules from React and React Router
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// Import components for each route
import Home from "./Home";
import Jesus from "./Jesus";
import Luis from "./Luis";

// Import the global styles for the entire app
import "./App.css";

// Define the main App component
const App = () => {
  return (
    // Wrap the entire app with the Router component to enable routing
    <Router>
      {/* Main container for the entire app */}
      <div className="app-container">
        {/* Navigation bar with a link to the Home page */}
        <div className="nav-bar">
          {/* Use the Link component for navigation links */}
          <Link to="/" className="nav-button">
            Home
          </Link>
        </div>

        {/* Define the routes for each page using the Routes component */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Jesus page */}
          <Route path="/jesus" element={<Jesus />} />

          {/* Route for the Luis page */}
          <Route path="/luis" element={<Luis />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component as the default export
export default App;
