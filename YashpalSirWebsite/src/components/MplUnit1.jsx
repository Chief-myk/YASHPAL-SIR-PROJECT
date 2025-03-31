import React from "react";

const MplUnit1 = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Manufacturing Notes - Unit 1</h1>
      <div className="w-full max-w-4xl h-[75vh] bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="/assests/Electrical_Science_Notes.pdf"
          width="100%"
          height="100%"
          className="border-none"
        ></iframe>
      </div>
      <a href="/assests/Electrical_Science_Notes.pdf" download className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
        Download PDF
      </a>
    </div>
  );
};

export default MplUnit1;
