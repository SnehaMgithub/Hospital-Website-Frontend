import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(()=>{
    fetchUnapprovedPosts();
  },[])

  const fetchUnapprovedPosts = async () => {
    try {
      const response = await api.get("/posts/unapprovedpost");
      setAppointments(response.data.posts);
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  
  // const approveBlog = async (id) => {
  //   try {
  //     const response = await api.patch(`/posts/${id}/approve`);
  //     setPosts(posts.filter((post) => post._id !== id));
  //     toast.success(response.data.message);
  //     navigate("/");
      
  //   } catch (error) {
  //     setError(error.response.data.message);
  //     toast.error(error.response.data.message);
  //   }
  // }
  // const approveBlog = async (id) => {
  //   try {
  //     const response = await api.patch(`/posts/${id}/approve`);
  //     setPosts(posts.filter((post) => post._id !== id));
  //     toast.success(response.data.message);
  //     navigate("/sucess");
  //   } catch (error) {
  //     // Handle undefined error.response
  //     setError(error.response.data.message);
  //     toast.error(error.response.data.message);
  //   }
  // };
  
  // const rejectBlog = async (id) => {
  //   try {
  //     const response = await api.delete(`/posts/delete/${id}`);
  //     setPosts(posts.filter((post) => post._id !== id));
  //     toast.success(response.data.message);
  //     navigate("/fail");
  //   } catch (error) {
  //     setError(error.response.data.message);
  //     toast.error(error.response.data.message);
  //   }
  // }
  const approveAppointment = async (id) => {
    try {
      const response = await api.patch(`/posts/${id}/approve`);
      setAppointments(appointments.filter((app) => app._id !== id));
      toast.success(response.data.message);
      
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };
  const rejectAppointment = async (id) => {
    try {
      const response = await api.delete(`/posts/delete/${id}`);
      setAppointments(appointments.filter((app) => app._id !== id));
      toast.success(response.data.message);

    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };
  
  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>
    {error && (
      <div className="bg-red-100 p-3 mb-4 text-red-600 rounded">
        {error}
      </div>
    )}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-white p-4 shadow rounded border"
        >
          <h2 className="text-lg font-bold">{appointment.name}</h2>
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {appointment.email}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Phone:</strong> {appointment.phone}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Date:</strong> {appointment.date}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Doctor:</strong> {appointment.doctor}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Department:</strong> {appointment.department}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Message:</strong> {appointment.message || "N/A"}
          </p>
          <div className="mt-4">
            <button
              onClick={() => approveAppointment(appointment._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => rejectAppointment(appointment._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default AdminPanel;