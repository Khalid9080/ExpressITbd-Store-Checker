import { useState } from "react";
import {
  FaDesktop,
  FaGlobe,
  FaMapMarkerAlt,
  FaThLarge,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [storeName, setStoreName] = useState("");
  const [domain, setDomain] = useState("");
  const [location, setLocation] = useState("Bangladesh");
  const [category, setCategory] = useState("Fashion");
  const [currency, setCurrency] = useState("BDT (Taka)");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(""); // for domain error only
  const navigate = useNavigate();

  const checkDomain = async () => {
    if (!domain.trim()) {
      setError("Domain cannot be empty");
      return;
    }
    try {
      const res = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${domain
          .trim()
          .toLowerCase()}.expressitbd.com`
      );
      if (res.data.data.taken) {
        setError("Not Available Domain, Re-enter!");
      } else {
        setError("");
      }
    } catch {
      setError("Error checking domain.");
    }
  };

  const createStore = async () => {
    if (error) {
      alert("Please fix domain error before submitting.");
      return;
    }
    if (storeName.trim().length < 3) {
      alert("Store name must be at least 3 characters long.");
      return;
    }
    if (!domain.trim()) {
      alert("Domain cannot be empty.");
      return;
    }
    if (
      email.trim() !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      alert("Invalid email format!");
      return;
    }
    try {
      const res = await axios.post(
        "https://interview-task-green.vercel.app/task/stores/create",
        {
          name: storeName.trim(),
          currency: currency.split(" ")[0], // e.g. "BDT"
          country: location,
          domain: domain.trim().toLowerCase(),
          category,
          email: email.trim() || "any@email.com", // fallback email if empty
        }
      );
      console.log("Store created successfully:", res.data);
      navigate("/products");
    } catch {
      alert("Failed to create store.");
    }
  };

  // Validation helpers
  const storeNameError =
    storeName.trim().length > 0 && storeName.trim().length < 3
      ? "Store name must be at least 3 characters long"
      : "";
  const emailError =
    email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      ? "Invalid email format!"
      : "";

  // Disable create store if errors exist
  const disableCreate =
    !!error || !!storeNameError || !!emailError || storeName.trim() === "" || domain.trim() === "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white rounded-md shadow-md p-6 sm:p-8 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl">
        <h2 className="text-lg font-semibold mb-4">Create a store</h2>
        <p className="text-sm mb-6 text-gray-600">
          Add your basic store information and complete the setup
        </p>
        <hr className="border-t border-gray-300 my-6" />

        <div className="space-y-6">
          {/* Store Name */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="text-blue-600 mt-1 min-w-[24px] flex-shrink-0">
              <FaDesktop />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                Give your online store a name
              </label>
              <p className="text-xs text-gray-600 max-w-md">
                A great store name is a big part of your success. Make sure it
                aligns with your brand and products.
              </p>
            </div>
            <div className="w-full sm:w-[350px]">
              <input
                type="text"
                placeholder="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className={`w-full rounded border p-2 text-sm ${storeNameError ? "border-red-500" : "border-gray-300"}`}
              />
              {storeNameError && (
                <p className="text-xs text-red-500 mt-1">{storeNameError}</p>
              )}
            </div>
          </div>

          {/* Domain */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="text-blue-600 mt-1 min-w-[24px] flex-shrink-0">
              <FaGlobe />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                Your online store subdomain
              </label>
              <p className="text-xs text-gray-600 max-w-md">
                A SEO-friendly store name is a crucial part of your success.
                Make sure it aligns with your brand and products.
              </p>
            </div>
            <div className="w-full sm:w-[350px] relative">
              <input
                type="text"
                placeholder="Enter domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onBlur={checkDomain}
                className={`w-full rounded border p-2 pr-28 text-sm ${error ? "border-red-500" : "border-gray-300"}`}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 select-none pointer-events-none">
                .expressitbd.com
              </span>
              {error && (
                <p className="text-xs text-red-500 mt-1 absolute left-0 -bottom-5 w-full">
                  {error}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="text-blue-600 mt-1 min-w-[24px] flex-shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                Where's your store located?
              </label>
              <p className="text-xs text-gray-600 max-w-md">
                Set your store's default location so we can optimize store
                access and speed for your customers.
              </p>
            </div>
            <div className="w-full sm:w-[350px]">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded border border-gray-300 p-2 text-sm"
              >
                <option>Bangladesh</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="text-blue-600 mt-1 min-w-[24px] flex-shrink-0">
              <FaThLarge />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                What's your Category?
              </label>
              <p className="text-xs text-gray-600 max-w-md">
                Set your store's default category so that we can optimize store
                access and speed for your customers.
              </p>
            </div>
            <div className="w-full sm:w-[350px]">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded border border-gray-300 p-2 text-sm"
              >
                <option>Fashion</option>
                <option>Electronics</option>
                <option>Beauty</option>
                <option>Home & Garden</option>
                <option>Sports</option>
                <option>Books</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="text-blue-600 min-w-[24px] flex-shrink-0">
              <FaSyncAlt size={20} />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                Choose store currency
              </label>
              <p className="text-xs text-gray-600">
                This is the main currency you wish to sell in.
              </p>
            </div>
            <div className="w-full lg:w-[286px] md:w-[183px] ">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded border border-gray-300 p-2 text-sm"
              >
                <option>BDT (Taka)</option>
                <option>USD (Dollar)</option>
                <option>EUR (Euro)</option>
                <option>GBP (Pound)</option>
              </select>
            </div>
          </div>


          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="text-blue-600 mt-1 min-w-[24px] flex-shrink-0">
              <FaEnvelope />
            </div>
            <div className="flex-grow">
              <label className="font-semibold text-sm block">
                Store contact email
              </label>
              <p className="text-xs text-gray-600 max-w-md">
                This is the email you'll use to send notifications to and
                receive orders from customers.
              </p>
            </div>
            <div className="w-full sm:w-[350px] relative">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded border p-2 text-sm ${emailError ? "border-red-500" : "border-gray-300"}`}
              />
              {emailError && (
                <p className="text-xs text-red-500 mt-1 absolute left-0 -bottom-5 w-full">
                  {emailError}
                </p>
              )}
            </div>
          </div>
        </div>



        {/* Submit button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={createStore}
            disabled={disableCreate}
            className={`rounded px-4 py-2 text-sm font-semibold ${disableCreate
              ? "bg-purple-200 text-gray-400 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
              } transition`}
          >
            Create store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
