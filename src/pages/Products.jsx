import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import LoadingSpinner from "../Components/LoadingSpinner";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false)); // Done loading
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen pb-28">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">ExpressStore Products</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover our exclusive collection – beautifully crafted and delivered to your door.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
