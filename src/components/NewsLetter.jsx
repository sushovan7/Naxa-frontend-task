import React from "react";

function NewsLetter() {
  return (
    <div className="w-full absolute left-1/2 transform -translate-x-1/2 -top-40  px-4 sm:px-6 lg:px-8  flex  justify-center">
      <div className="max-w-4xl w-full rounded-xl shadow-lg overflow-hidden">
        <div
          className="relative bg-white rounded-xl p-8 sm:p-12"
          style={{
            backgroundImage:
              "url('https://naxa.com.np/d0bf8e3172a33a161a90bf7bbfb15ab3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 py-6">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl sm:text-4xl font-medium text-white">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-gray-100 text-lg sm:text-xl font-light">
                Join our subscriber list to receive latest news & updates.
              </p>
            </div>

            <form className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full max-w-md px-5 py-2 border border-gray-200  focus:outline-none focus:ring-2 focus:border-transparent bg-white bg-opacity-95 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-12 py-2 bg-[#FFDC1B] hover:bg-yellow-500 text-[#174BDD] font-semibold  transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
