import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  const storeInfo = localStorage.getItem("storeCreated");

  if (!storeInfo) {
    toast.error("You must create a store first!");

    // Delay navigation to avoid double toast
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 100); // 100ms is usually enough

    return;
  }

  const showToast = sessionStorage.getItem("showSuccessToast");
  if (showToast) {
    toast.success("Store created successfully!");
    sessionStorage.removeItem("showSuccessToast");
  }

  axios
    .get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
    .then((res) => setProducts(res.data.data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);





  if (loading) return <LoadingSpinner />;

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen pb-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">ExpressStore Products</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover our exclusive collection – beautifully crafted and delivered to your door.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
