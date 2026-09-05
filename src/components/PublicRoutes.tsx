import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";
import LoadingComponent from "./ui/Loading/LoadingComponent";

function PublicRoutes() {
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const user = useAuthStore((state) => state.user);

  if (isInitializing) {
    return <LoadingComponent size="sm" />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PublicRoutes;
