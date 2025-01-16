import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin";
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    console.log("Stored Token:", localStorage.getItem("token"));
console.log("Stored Role:", localStorage.getItem("role"));
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to={"/"} className="text-xl font-bold">
          SM Hospital
        </Link>
        <div>
          <Link to={"/"}  className="text-white hover:text-blue-400 transition duration-300 mr-5">
            Home
          </Link>
          
          {isAuthenticated ? (
            <>
                <button
          onClick={() =>
            document.getElementById("appointment").scrollIntoView({ behavior: "smooth" })
          }
          className="text-white hover:text-blue-400 transition duration-300 mr-5"
        >
          Appointment
        </button>
        <button
          onClick={() =>
            document.getElementById("specialist").scrollIntoView({ behavior: "smooth" })
          }
          className="text-white hover:text-blue-400 transition duration-300 mr-5"
        >
          Specialist
        </button>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="mr-4">
                Login
              </Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}

          {isAdmin && (
            <Link to={"/admin"} className="ml-4">
              Admin Panel
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;