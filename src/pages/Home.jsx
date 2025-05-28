/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [storeName, setStoreName] = useState("");
  const navigate = useNavigate();

  const checkDomain = async () => {
    try {
      const res = await axios.get(`https://interview-task-green.vercel.app/task/domains/check/${domain}.expressitbd.com`);
      if (res.data.data.taken) {
        setError("Domain is taken!");
      } else {
        setError("");
      }
    } catch (err) {
      setError("Error checking domain.");
    }
  };

  const createStore = async () => {
    if (error) return;
    try {
      const res = await axios.post("https://interview-task-green.vercel.app/task/stores/create", {
        name: storeName,
        currency: "BDT",
        country: "Bangladesh",
        domain,
        category: "any",
        email: "any@email.com",
      });
      console.log(res.data);
      navigate("/products");
    } catch (err) {
      alert("Failed to create store.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Create Your Store</h1>
      <input
        type="text"
        placeholder="Store Name"
        className="border p-2 w-80"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter domain"
        className={`border p-2 w-80 ${error && "border-red-500"}`}
        onBlur={checkDomain}
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={createStore} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default Home;
