import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaPizzaSlice } from "react-icons/fa";

function analyzePassword(pw) {
  if (!pw) return { label: "", percent: 0, barClass: "bg-transparent" };
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasNum = /\d/.test(pw);
  const hasSpecial = /[^a-zA-Z0-9]/.test(pw);
  const len = pw.length;
  let score = 0;
  if (len >= 6) score++;
  if (len >= 8) score++;
  if (len >= 12) score++;
  if ((hasLower || hasUpper) && hasNum) score++;
  if (hasLower && hasUpper) score++;
  if (hasSpecial) score++;

  if (len < 6) {
    return { label: "Weak", percent: 25, barClass: "bg-red-500" };
  }
  if (score <= 3) {
    return { label: "Fair", percent: 50, barClass: "bg-orange-400" };
  }
  if (score <= 5) {
    return { label: "Good", percent: 75, barClass: "bg-yellow-400" };
  }
  return { label: "Strong", percent: 100, barClass: "bg-emerald-500" };
}

function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+254 ");
  const [password, setPassword] = useState("");

  const strength = useMemo(() => analyzePassword(password), [password]);

  const inputRing =
    "w-full rounded-xl border bg-red-950/35 px-4 py-3.5 text-white placeholder:text-red-300/45 outline-none transition-all duration-200 " +
    "border-red-800/45 focus:border-red-400 focus:ring-2 focus:ring-red-500/35 focus:shadow-[0_0_0_1px_rgba(239,68,68,0.25)]";

  const handlePhoneChange = (e) => {
    let v = e.target.value;
    if (!v.startsWith("+254")) {
      v = "+254 " + v.replace(/^\+?254?\s*/, "");
    }
    setPhone(v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#5c2a2e] via-[#442328] to-[#341a20] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] h-72 w-72 rounded-full bg-red-500/25 blur-[100px]" />
        <div className="absolute bottom-[5%] left-[-5%] h-96 w-96 rounded-full bg-amber-500/15 blur-[100px]" />
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
            Join the family
          </span>
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="rounded-3xl border border-red-800/35 bg-[#3d2528]/65 p-8 shadow-[0_0_50px_rgba(127,29,29,0.2)] backdrop-blur-xl md:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight">Create account</h1>
            <p className="mt-2 text-sm text-gray-400">
              Save addresses, reorder favorites, and get offers in Nairobi.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="signup-first"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    id="signup-first"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className={inputRing}
                  />
                </div>
                <div>
                  <label
                    htmlFor="signup-last"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    id="signup-last"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className={inputRing}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  id="signup-email"
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
                <label
                  htmlFor="signup-phone"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Phone
                </label>
                <input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+254 7XX XXX XXX"
                  className={inputRing}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="signup-password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-xs font-semibold text-red-300 transition-colors hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className={inputRing}
                />
                <div className="mt-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-red-950/80">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${strength.barClass}`}
                      style={{ width: `${strength.percent}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-gray-400">
                    {strength.label ? (
                      <>
                        Strength:{" "}
                        <span className="font-semibold text-gray-200">
                          {strength.label}
                        </span>
                      </>
                    ) : (
                      "Start typing to see password strength."
                    )}
                  </p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-500">
                By signing up you agree to our{" "}
                <a
                  href="#terms"
                  className="font-medium text-red-400 underline-offset-2 hover:underline"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#privacy"
                  className="font-medium text-red-400 underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/40 transition hover:from-red-600 hover:to-red-500 hover:shadow-red-800/50"
              >
                Create account
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-red-950/70" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-[#3d2528]/90 px-3 text-red-200/55">Or sign up with</span>
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-red-400 underline-offset-4 hover:text-red-300 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
