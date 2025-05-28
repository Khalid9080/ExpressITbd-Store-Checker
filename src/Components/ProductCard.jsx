import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product._id}`)} className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform">
      <img src={product.images[0]?.secure_url} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-blue-500 font-bold mt-1">{product.price} BDT</p>
    </div>
  );
};

export default ProductCard;
//         