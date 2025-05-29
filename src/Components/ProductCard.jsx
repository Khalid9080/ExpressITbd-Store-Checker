import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative overflow-hidden rounded-2xl pb-[9rem] shadow-sm shadow-gray-200 bg-white"
      style={{ "--product-info-height": "9rem", "--product-actions-height": "7.5rem" }}
    >
      {/* Product Image */}
      <img
        src={product.images[0]?.secure_url}
        alt={product.name}
        className="aspect-square w-full object-cover object-top  group-hover:opacity-50 transition"
      />

      {/* Product Info */}
      <div
        className="absolute inset-x-0 bottom-0 bg-white transition-transform duration-500 ease-in-out 
        group-hover:-translate-y-[var(--product-actions-height)]"
      >
        <div className="flex h-[var(--product-info-height)] flex-col justify-between p-5">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 truncate">{product.description}</p>
          </div>
          <div className="text-xl font-semibold text-indigo-600">
            <div>{product.price} BDT</div>
          </div>
        </div>
      </div>

      {/* Product Actions */}
      <div
        className="absolute inset-x-0 bottom-0 flex h-[var(--product-actions-height)] translate-y-full 
        flex-col justify-between bg-white px-5 pb-5 transition-transform duration-500 ease-in-out 
        group-hover:translate-y-0"
      >
        <button
          onClick={() => navigate(`/product/${product._id}`)}
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-600 bg-indigo-900 px-4 py-3 text-sm font-medium text-white hover:bg-purple-600 hover:scale-105 transition-transform"
        >
          View Details
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-900 transition  "
        >
          Add to Cart
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;
