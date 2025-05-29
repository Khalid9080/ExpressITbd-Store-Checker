import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then((res) => {
        const found = res.data.data.find((p) => p._id === id);
        setProduct(found);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 px-6 pt-10 pb-20">
      {/* Page Title and Subheading */}
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Product Details</h1>
        <p className="text-lg text-gray-600">
          Explore complete information about the product including images, description, pricing, and demo video.
        </p>
      </div>

      {/* Product Card */}
      <div className="group relative mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
          <img
            src={product.images[0]?.secure_url}
            alt={product.name}
            className="aspect-[3/4] w-full object-cover object-[center_10%] transition duration-300 ease-out group-hover:scale-105"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-indigo-500/10 transition ease-out group-hover:bg-purple-500/10"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl mask-t-from-50% bg-indigo-600/50 backdrop-blur-xs transition ease-out group-hover:bg-purple-600/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-2 text-xs font-medium text-white backdrop-blur-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path d="M3.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.28.53L8 10.06l3.72 3.72a.75.75 0 0 0 1.28-.53V2.75a.75.75 0 0 0-.75-.75h-8.5Z" />
                </svg>
                <span>Featured</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">{product.name}</h3>
              <p className="mt-1 text-sm text-white/90">{product.description}</p>
              <p className="mt-2 text-lg font-semibold text-white">{product.price} BDT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Landscape Video Section */}
      {/* Responsive Video Section */}
      {product.video?.secure_url && (
        <div className="mt-12 w-full max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-gray-800">Product Demo</h2>
            <p className="text-lg text-gray-600 mt-1">
              Watch this short video to better understand the product's features and usage.
            </p>
          </div>
          <div className="aspect-[9/16] md:aspect-video rounded-xl overflow-hidden shadow-lg bg-white p-3">
            <video
              className="w-full h-full object-cover rounded-xl"
              controls
              src={product.video.secure_url}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;


/*

{product.video?.secure_url && (
  <div className="mt-16 w-full max-w-4xl">
    <div className="bg-white rounded-3xl p-6 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Product Demo</h2>
        <p className="text-lg text-gray-600 mt-1">
          Watch this short video to better understand the product's features and usage.
        </p>
      </div>

     
      <div className="relative aspect-video overflow-hidden rounded-2xl group">
        <video
          className="w-full h-full object-cover transition duration-300 ease-out group-hover:scale-105"
          controls
          src={product.video.secure_url}
        />
        <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-purple-500/10 transition ease-out"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-indigo-600/50 mask-t-from-50% backdrop-blur-xs rounded-b-2xl group-hover:bg-purple-600/50 transition ease-out"></div>
      </div>
    </div>
  </div>
)}


*/