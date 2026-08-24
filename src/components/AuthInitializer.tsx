import { useEffect } from "react";
import { useAuthStore } from "../stores/auth.store";

function AuthInitializer() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return null;
}

export default AuthInitializer;
