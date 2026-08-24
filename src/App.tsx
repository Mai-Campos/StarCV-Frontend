import AuthInitializer from "./components/AuthInitializer";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./stores/auth.store";

function App() {
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <AuthInitializer />
      {isInitializing ? (
        <div>Loading...</div>
      ) : user ? (
        <div>Dashboard</div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
