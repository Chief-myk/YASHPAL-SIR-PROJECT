// components/About.js
import React from 'react';

const About = () => {
  const educationItems = [
    "Ph.D. in Statistics - J.N.V. University, Jodhpur",
    "MBA - Allahabad University",
    "Executive Program in Data Science - XLRI, Jamshedpur"
  ];

  const awardsItems = [
    "Outstanding Reviewer Award",
    "Best Paper Awards",
    "Most Devoted Teacher Award",
    "Young Statistician Award"
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Biography Section */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3 h-64 md:h-auto">
              <img 
                src="/vasily-koloda-8CqDvPuo_kI-unsplash.jpg" 
                alt="Professor" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-4 w-full">
                <h2 className="text-lg font-semibold">Professor & Dean</h2>
                <p className="text-sm opacity-90">Office of Doctoral Studies, O.P. Jindal Global University, Sonipat, Haryana</p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">
                Biography
              </h1>
              <div className="text-gray-700 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                <p>Prof. (Dr.) Krishan K Pandey is currently working as a professor in the area of decision sciences at Jindal Global Business School (JGBS) and Dean, Office of Doctoral Studies (ODS) at O. P. Jindal Global University (JGU), Sonipat, Haryana. Dr. Pandey holds Bachelor's, Master's, and Doctorate degrees in Statistics from J.N.V. University, Jodhpur. He also holds an MBA from Allahabad and an Executive Program degree in Data Science from Xavier School of Management (XLRI), Jamshedpur.</p>
                <p>Dr. Pandey has extensive experience in research and teaching, with a focus on Data Mining, Predictive Analytics, Business Analytics, Risk Analysis, and Statistical Modeling. He has published over 50 research papers in prestigious journals, authored multiple books, and supervised 16 Ph.D. scholars. He also serves as an editorial board member for several high-impact journals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teaching Section */}
          <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-300 hover:shadow-2xl">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">
              Teaching
            </h1>
            <p className="text-gray-700 mb-4">
              Dr. Pandey is a passionate educator with over two decades of experience in teaching various subjects related to statistics, data science, and research methodology.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-2 text-left">Current Teaching</th>
                    <th className="border border-gray-200 p-2 text-left">Past Teaching</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-2">Predictive Data Mining, Data Visualization, Research Methods</td>
                    <td className="border border-gray-200 p-2">Applied Statistics, Statistical Inference, Data Mining</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Section */}
          <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-300 hover:shadow-2xl">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">
              Research & Guidance
            </h1>
            <p className="text-gray-700">
              Dr. Pandey has played a crucial role in guiding research scholars in the areas of statistical modeling and data science. His research contributions include studies on predictive analytics, risk analysis, and business intelligence.
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-300 hover:shadow-2xl">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">
              Education
            </h1>
            <ul className="space-y-2">
              {educationItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards Section */}
          <div className="bg-white shadow-xl rounded-xl p-6 transition-all duration-300 hover:shadow-2xl md:col-span-2 lg:col-span-1">
            <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-3 mb-6">
              Awards & Honors
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {awardsItems.map((item, index) => (
                <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;