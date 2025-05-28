import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";



const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://glore-bd-backend-node-mongo.vercel.app/api/product")
      .then(res => setProducts(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
