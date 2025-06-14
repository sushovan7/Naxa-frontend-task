import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            404 Error
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600">
            Page Not Found
          </h2>
          <p className="text-gray-500">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#FFDC1D] hover:bg-yellow-700 text-blue-500 rounded-lg transition-colors duration-200 font-medium"
          >
            Return Home
          </button>
        </div>

        <p className="text-sm text-gray-400 pt-4">
          Need help?{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
