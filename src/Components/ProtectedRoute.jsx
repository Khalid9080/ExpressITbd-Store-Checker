import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

// Module-level flag to prevent multiple toasts
let hasWarned = false;

const ProtectedRoute = () => {
  const storeCreated = localStorage.getItem("storeCreated");

  if (!storeCreated) {
    if (!hasWarned) {
      toast.error("You must create a store first!");
      hasWarned = true;
      setTimeout(() => (hasWarned = false), 1000); // reset after 1s
    }
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
