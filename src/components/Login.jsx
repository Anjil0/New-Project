import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import canteen from "../../public/canteen.png";

const CanteenLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      console.log("Login attempt with:", { username, password });
    }
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center px-6 p-12 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://thirdeyesecure.com/wp-content/uploads/2024/06/hotel_management_img-4.png')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="w-full max-w-md space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-md">
        <div className="text-center">
          <div className="bg-stone-600 p-2 rounded-full inline-block">
            <div className="relative flex justify-center items-center w-24 h-24">
              <img
                src={canteen}
                alt="Canteen Management System Logo"
                className="h-20 w-20 object-contain rounded-full"
              />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Canteen Management System
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 p-3 rounded relative"
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
              className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                required
                className="relative block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {passwordVisible ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 p-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Not registered?{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Contact your system administrator
          </a>
        </p>
      </div>
    </div>
  );
};

export default CanteenLogin;
