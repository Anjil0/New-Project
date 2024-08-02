import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import canteen from "/canteen.png";

const CanteenLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      console.log("Login attempt with:", { username, password });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://thirdeyesecure.com/wp-content/uploads/2024/06/hotel_management_img-4.png')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="w-full max-w-md space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-md">
        <div className="text-center">
          <div className="bg-stone-600 p-2 rounded-full inline-block mb-4">
            <div className="relative flex justify-center items-center w-24 h-24">
              <img
                src={canteen}
                alt="Canteen Management System Logo"
                className="h-20 w-20 object-contain rounded-full"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Canteen Management System
          </h2>
          <p className="text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="space-y-4 rounded-md shadow-sm">
            <input
              id="username"
              name="username"
              type="text"
              required
              className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-800" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-800" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2"
          >
            Sign in
          </button>
        </form>
        
        {/* Updated this section */}
        <div className="flex justify-between text-sm text-gray-600">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
          <p className="ml-2">
            Not yet registered?{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanteenLogin;
