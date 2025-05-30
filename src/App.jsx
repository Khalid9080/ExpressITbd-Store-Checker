import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ToastContainer />
        <div className="flex-grow min-h-screen">
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
