  import React, { useEffect, useState } from "react";
  import api from "../Services/api";
  const Form = () => {
    const [form, setForm] = useState([]);

    useEffect(() => {
      fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
      try {
        const response = await api.get("/posts/getpost");
        setForm(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {form.map((form) => {
            return (
              <div
                key={form._id}
                className="bg-white p-4 shadow rounded  relative border tranform transition-transform duration-300 hover:scale-105"
              >
                <h2 className="text-lg font-semibold">{form.title}</h2>
                <p className="text-gray-500">{form.user.name}</p>
                <p className="text-gray-500">{form.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  export default Form;
