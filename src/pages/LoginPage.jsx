import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaPizzaSlice } from "react-icons/fa";

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRing =
    "w-full rounded-xl border bg-red-950/35 px-4 py-3.5 text-white placeholder:text-red-300/45 outline-none transition-all duration-200 " +
    "border-red-800/45 focus:border-red-400 focus:ring-2 focus:ring-red-500/35 focus:shadow-[0_0_0_1px_rgba(239,68,68,0.25)]";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#5c2a2e] via-[#442328] to-[#341a20] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] h-72 w-72 rounded-full bg-red-500/25 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-96 w-96 rounded-full bg-amber-500/15 blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-red-800/35 bg-[#3f1e22]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-red-400 md:text-xl"
          >
            <FaPizzaSlice className="text-2xl text-red-500" />
            Pizza Nairobi
          </Link>
          <span className="text-sm text-gray-400 hidden sm:inline">
            Welcome back
          </span>
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-red-800/35 bg-[#3d2528]/65 p-8 shadow-[0_0_50px_rgba(127,29,29,0.2)] backdrop-blur-xl md:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight">Sign in</h1>
            <p className="mt-2 text-sm text-gray-400">
              Order faster and track your pizzas from one place.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className={inputRing}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="login-password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <a
                    href="#forgot-password"
                    className="text-sm font-semibold text-red-400 underline-offset-4 hover:text-red-300 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className={inputRing + " pr-[4.25rem]"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1.5 text-xs font-semibold text-red-300 transition-colors hover:bg-red-950/50 hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/40 transition hover:from-red-600 hover:to-red-500 hover:shadow-red-800/50"
              >
                Sign in
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-red-950/70" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-[#3d2528]/90 px-3 text-red-200/55">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-800/35 bg-red-950/30 py-3.5 text-sm font-semibold text-gray-100 transition hover:border-red-600/45 hover:bg-red-900/40"
            >
              <FaGoogle className="text-lg text-[#4285F4]" />
              Google
            </button>

            <p className="mt-8 text-center text-sm text-gray-400">
              New here?{" "}
              <Link
                to="/signup"
                className="font-semibold text-red-400 underline-offset-4 hover:text-red-300 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
