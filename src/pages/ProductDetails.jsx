import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then(res => {
        const found = res.data.data.find(p => p._id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <img src={product.images[0]?.secure_url} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="text-xl text-blue-600 mt-2">{product.price} BDT</p>
      <video className="mt-4 w-full" controls src={product.video?.secure_url}></video>
    </div>
  );
};

export default ProductDetails;
