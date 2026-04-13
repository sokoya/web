import React from 'react';
import { AlertCircle, Wifi } from 'lucide-react';

const ErrorPage = ({title, message, description}) => {
  return (
    <div className="min-h-screen bg-gray-50 min-w-full flex flex-col items-center justify-center p-4 text-xl">
      <div className="max-w-lg w-full space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <AlertCircle size={120} className="text-red-500 animate-pulse" />
            {/* <Wifi size={48} className="text-red-300 absolute bottom-0 right-0" /> */}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            {title || "Connection Error"} 
          </h2>
          <p className="text-red-600">
            {message || "We're unable to establish a connection to the server at this time."}
          </p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            {description || "Please verify your internet connection and ensure you're using the correct URL. If the problem persists, our support team is here to help."}
          </p>
          
          <div className="flex w-full justify-center mt-8">
            {/* <button 
              onClick={() => window.location.reload()}
              className="px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-200"
            >
              Try Again
            </button> */}
            
            <button 
              onClick={() => window.location.href = 'https://payscribe.co/contact'}
              className="px-4 md:py-4 py-6 rounded-lg bg-primary md:w-auto w-full my-5 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;