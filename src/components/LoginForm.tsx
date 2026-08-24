import { Eye, EyeOff } from "lucide-react";
import { authService } from "../services/auth.service";

import { SiGoogle, SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { useAuthStore } from "../stores/auth.store";
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await authService.login({ email, password });
      setAuth(result.user, result.accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-(--color-primary)"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-(--color-border) px-4 py-3 text-sm outline-none transition focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-accent-soft)"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-(--color-primary)"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-(--color-border) px-4 py-3 pr-12 text-sm outline-none transition focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-accent-soft)"
            />

            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-(--color-secondary) transition hover:text-(--color-primary)"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-(--color-secondary) transition hover:text-(--color-primary)"
          >
            Forgot password?
          </button>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-(--color-primary) px-4 py-3 font-medium text-white transition hover:opacity-90"
        >
          Login
        </button>
      </form>
      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-(--color-border)" />

        <span className="text-xs font-medium text-(--color-text-muted)">
          OR
        </span>

        <div className="h-px flex-1 bg-(--color-border)" />
      </div>
      {/* Social login */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with GitHub"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-(--color-border) text-(--color-primary) transition hover:bg-(--color-accent-soft)"
        >
          <SiGithub size={19} />
        </button>

        <button
          type="button"
          aria-label="Continue with Google"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-(--color-border) text-(--color-primary) transition hover:bg-(--color-accent-soft)"
        >
          <SiGoogle size={19} />
        </button>

        <button
          type="button"
          aria-label="Continue with Facebook"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-(--color-border) text-(--color-primary) transition hover:bg-(--color-accent-soft)"
        >
          <SiFacebook size={19} />
        </button>
      </div>
      {/* Register */}
      <p className="mt-6 text-center text-sm text-(--color-text-muted)">
        Don't have an account?{" "}
        <button
          type="button"
          className="cursor-pointer font-medium text-(--color-primary) hover:underline"
        >
          Register
        </button>
      </p>
    </>
  );
}

export default LoginForm;
