import LoginForm from "../components/LoginForm";
import logo from "../assets/star-cv-logo.webp";

function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-(--color-background) px-4 py-8">
      <section className="w-full max-w-lg rounded-2xl bg-(--color-surface) p-10 shadow-xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Star-CV" className="h-28 w-28 object-contain" />
        </div>

        {/* Welcome */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold text-(--color-primary)">
            Welcome to Star CV
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
