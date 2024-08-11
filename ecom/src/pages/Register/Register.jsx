import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex min-h-max my-16 justify-center items-center">
      <div className="bg-primary shadow-lg rounded-xl w-[570px] h-[600px] p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-600 mt-2">
            Please Register using account detail bellow.
          </p>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-16  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-16  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
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
            Create
          </button>
        </div>
        <div className="mt-5">
          <Link to="/">
            <p className="text-base">Return to Store</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
