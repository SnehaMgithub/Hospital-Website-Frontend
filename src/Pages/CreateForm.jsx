import React, { useState } from "react";
import api from "../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [name,setName]=useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [date,setDate] = useState("");
  const [doctor,setDoctor] = useState("");
  const [department,setDepartment] = useState("");
  const [message,setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    
    e.preventDefault();
    if (!name || !email || !phone || !date || !doctor || !department) {
      setError("All fields are required");
      return;
  }
  try{
  
    const formData = {
      name,
      email,
      phone,
      date,
      doctor,
      department,
      message,
    };

  const response = await api.post("/posts/create",formData, {
    headers:{
      "Content-Type":"application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  toast.success(response.data.message);
  navigate("/");
} catch (error) {
  setError(error.response.data.message);
  toast.error(error.response.data.message);
}
setName("");
setEmail("");
setPhone("");
setDate(null);
setDoctor("");
setDepartment("");
setMessage("");
navigate("/sucess");
  };

  
    const doctors = [
      {
        name: "Walter White",
        title: "Chief Medical Officer",
        description: "Explicabo voluptatem mollitia et repellat qui dolorem quasi",
        image: "https://themewagon.github.io/MediLab/assets/img/doctors/doctors-1.jpg",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        },
      },
      {
        name: "Sarah Jhonson",
        title: "Anesthesiologist",
        description: "Aut maiores voluptates amet et quis praesentium qui senda para",
        image: "https://themewagon.github.io/MediLab/assets/img/doctors/doctors-2.jpg",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        },
      },
      {
        name: "William Anderson",
        title: "Cardiology",
        description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
        image: "https://themewagon.github.io/MediLab/assets/img/doctors/doctors-3.jpg",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        },
      },
      {
        name: "Amanda Jepson",
        title: "Neurosurgeon",
        description: "Dolorum tempora officiis odit laborum officiis et accusamus",
        image: "https://themewagon.github.io/MediLab/assets/img/doctors/doctors-4.jpg",
        social: {
          twitter: "#",
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        },
      },
    ];
  
  return (
    <>
   <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('https://themewagon.github.io/MediLab/assets/img/hero-bg.jpg')" }}
>
  <div className="bg-white bg-opacity-80 py-16">
    <div className="container mx-auto text-center px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-gray-800">WELCOME TO SM Hospital</h1>
      <p className="mt-4 text-lg text-gray-600">
      Quality care ranked among the best in the nation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* First Box */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Why Choose SM Hospital?</h3>
          <p className="mt-4 text-sm">
          At SM Hospital, we prioritize compassionate care, cutting-edge technology, and a team of expert medical professionals dedicated to your well-being. Choose us for personalized treatment, advanced diagnostics, and a commitment to excellence in healthcare.
          </p>
        </div>
        {/* Second Box */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
           Comprehensive & Specialized Care
          </h3>
          <p className="mt-4 text-sm text-gray-600">
          Our team of expert healthcare professionals is committed to providing 
    personalized treatment plans tailored to each patient’s needs, ensuring 
    the best possible outcomes with compassion and precision.
          </p>
        </div>
        {/* Third Box */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">
          Advanced Technology & Modern Facilities
          </h3>
          <p className="mt-4 text-sm text-gray-600">
          Equipped with state-of-the-art medical technology and modern infrastructure, 
    we ensure accurate diagnostics, minimally invasive treatments, and superior 
    patient care for a seamless healing experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="bg-blue-50 py-12">
  <div class="container mx-auto px-6 lg:px-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a9 9 0 10-18 0v2h5m4-10v6m0 0V6m0 10H8m4 0h4" />
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">85</h2>
        <p class="text-gray-500">Doctors</p>
      </div>
    
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.88 0 3.5 1.21 4 2.87m-8 0c.5-1.66 2.12-2.87 4-2.87m0 8v4m0 0H8m4 0h4" />
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">18</h2>
        <p class="text-gray-500">Departments</p>
      </div>
     
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V10m0 0V4m0 6h4m-4 0H8" />
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">12</h2>
        <p class="text-gray-500">Research Labs</p>
      </div>
    
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <div class="flex justify-center mb-4">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zM12 10V6m0 0h-2m2 0h2m-2 4v4m0 0H8m4 0h4" />
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">150</h2>
        <p class="text-gray-500">Awards</p>
      </div>
    </div>
  </div>
</section>

<div id = "appointment" className="container mx-auto mt-8">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Appointment</h2>
    <p className="text-center mb-4 text-gray-600">
    Dedicated to providing exceptional healthcare, we prioritize patient well-being 
    with expert medical care, advanced technology, and a compassionate approach.
    </p>

    {/* Name, Email, Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="name" className="block mb-2 font-bold">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="border w-full p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-bold">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="border w-full p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 font-bold">
          Your Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone"
          className="border w-full p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date" className="block mb-2 font-bold">
          Appointment Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="border w-full p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </div>

    {/* Select Department and Doctor */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="department" className="block mb-2 font-bold">
          Select Department
        </label>
        <select
          id="department"
          name="department"
          className="border w-full p-2 rounded"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
      </div>
      <div>
        <label htmlFor="doctor" className="block mb-2 font-bold">
          Select Doctor
        </label>
        <select
          id="doctor"
          name="doctor"
          className="border w-full p-2 rounded"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          <option value="Doctor 1">Doctor 1</option>
          <option value="Doctor 2">Doctor 2</option>
          <option value="Doctor 3">Doctor 3</option>
        </select>
      </div>
    </div>

    {/* Message */}
    <div className="mb-4">
      <label htmlFor="message" className="block mb-2 font-bold">
        Message (Optional)
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message (optional)"
        className="border w-full p-2 rounded"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Make an Appointment
    </button>
  </form>
</div>


<section id="specialist" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Doctors</h2>
        <p className="text-gray-600 mt-2">
        Our team of highly skilled and compassionate doctors is dedicated to providing 
        exceptional medical care, ensuring the best possible treatment for every patient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mr-6"
              />
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-blue-500">{doctor.title}</p>
                <p className="text-sm text-gray-600 mt-2">{doctor.description}</p>
                <div className="flex space-x-3 mt-4">
                  <a href={doctor.social.twitter} className="text-gray-400 hover:text-blue-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={doctor.social.facebook} className="text-gray-400 hover:text-blue-500">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={doctor.social.instagram} className="text-gray-400 hover:text-pink-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={doctor.social.linkedin} className="text-gray-400 hover:text-blue-700">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <footer className="bg-blue-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Medilab Info */}
          <div className="col-span-1 pl-20 w-max">
            <h2 className="text-xl font-bold text-gray-800">SM Hospital</h2>
            <p className="mt-2 text-gray-600">
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Phone:</span> +1 5589 55488 55
              <br />
              <span className="font-bold">Email:</span> info@example.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="pl-28 w-max">
            <h3 className="text-lg font-semibold text-gray-800">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="pl-16 w-max">
          <h3 className="text-lg font-semibold text-gray-800">Our Medical Services</h3>
<ul className="mt-4 space-y-2">
  <li><a href="#" className="text-gray-600 hover:text-blue-500">General Medicine</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Cardiology</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Neurology</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Pediatrics</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Orthopedics</a></li>
</ul>
</div>

          {/* Hic Solutasept */}
          <div className="pl-16 w-max">
          <h3 className="text-lg font-semibold text-gray-800">Patient Resources</h3>
<ul className="mt-4 space-y-2">
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Health Tips</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Insurance Information</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Patient Rights & Policies</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">Medical Research & News</a></li>
  <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQs</a></li>
</ul>
</div>

          {/* Nobis Illum */}
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Copyright */}
        <div className="text-center text-gray-600">
          <p>
            &copy; Copyright <strong>SM Hospital</strong>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>

  </>
);
};
export default CreateForm;
