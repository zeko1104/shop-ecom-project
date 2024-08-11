import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-primary shadow-lg rounded-xl w-[570px] h-[460px] p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-600 mt-2">
            Please login using your account details below.
          </p>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-16  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-16 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </form>
        <div className="flex justify-between items-center mt-6">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Sign in
          </button>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Dont have an account?{" "}
            <Link to='/register'>
              <p className="text-blue-500 cursor-pointer hover:underline">
                Create Account
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
