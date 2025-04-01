import React, { useState, useRef } from "react";
import { FiUpload, FiDownload, FiX, FiFile, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MplUnit1 = () => {
  const [pdfFiles, setPdfFiles] = useState([
    { name: "Furnace- Blast Furnace (1).pdf", url: "/assests/MPL/unit1/Furnace- Blast Furnace (1).pdf" },
    { name: "topic_2_importance_of_manufacturing_towards_technology_and_social.pdf", url: "/assests/MPL/unit1/topic_2_importance_of_manufacturing_towards_technology_and_social.pdf" },
    { name: "Topic 3 Properties of Materials.pdf", url: "/assests/MPL/unit1/Topic 3 Properties of Materials.pdf" },
    { name: "topic 4 Classification of Engineering Materials.pdf", url: "/assests/MPL/unit1/topic 4 Classification of Engineering Materials.pdf" },
    { name: "Topic 5 Cupola Furnace.pdf", url: "/assests/MPL/unit1/Topic 5 Cupola Furnace.pdf" },
    { name: "topic 6 casting process  and its terminology.pdf", url: "/assests/MPL/unit1/topic 6 casting process  and its terminology.pdf" },
    { name: "Topic 7- Pattern & Pattern Allowances.pdf", url: "/assests/MPL/unit1/Topic 7- Pattern & Pattern Allowances.pdf" },
    { name: "Topic 8- Types of Patterns and Pattern Colours.pdf", url: "/assests/MPL/unit1/Topic 8- Types of Patterns and Pattern Colours.pdf" },
    { name: "Topic_9_Moulding,_Moulding_Sand,_Moulding_Sand_Properties,_Solidification.pdf", url: "/assests/MPL/unit1/Topic_9_Moulding,_Moulding_Sand,_Moulding_Sand_Properties,_Solidification.pdf" },
    { name: "Topic 10- Core.pdf", url: "/assests/MPL/unit1/Topic 10- Core.pdf" },   
    { name: "Topic 11- Gating System.pdf", url: "/assests/MPL/unit1/Topic 11- Gating System.pdf" },
    { name: "Topic12 Casting Techniques.pdf", url: "/assests/MPL/unit1/Topic12 Casting Techniques.pdf" },
    { name: "Topic 13- casting Defects.pdf", url: "/assests/MPL/unit1/Topic 13- casting Defects.pdf" },
    
  ]);
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPdfFiles = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setPdfFiles([...pdfFiles, ...newPdfFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    const newPdfFiles = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setPdfFiles([...pdfFiles, ...newPdfFiles]);
  };

  const removePdf = (index) => {
    const updatedFiles = pdfFiles.filter((_, i) => i !== index);
    setPdfFiles(updatedFiles);
    if (currentPdfIndex >= updatedFiles.length) {
      setCurrentPdfIndex(Math.max(0, updatedFiles.length - 1));
    }
  };

  const nextPdf = () => {
    setCurrentPdfIndex((prevIndex) => (prevIndex + 1) % pdfFiles.length);
  };

  const prevPdf = () => {
    setCurrentPdfIndex((prevIndex) => (prevIndex - 1 + pdfFiles.length) % pdfFiles.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Manufacturing Process Learning
        </h1>
        <p className="text-gray-300 text-center mb-8">Unit 1 - Study Materials</p>

        {/* Upload Area */}
        {/* <div 
          className={`mb-8 p-8 border-2 border-dashed rounded-xl text-center transition-all ${isDragging ? 'border-purple-500 bg-gray-800' : 'border-gray-600 bg-gray-800/50'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <FiUpload className="mx-auto text-4xl text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {isDragging ? 'Drop your PDFs here' : 'Upload PDF Files'}
          </h3>
          <p className="text-gray-400 mb-4">
            Drag & drop PDF files here or click to browse
          </p>
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
            Select Files
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".pdf"
            multiple
          />
        </div> */}

        {pdfFiles.length > 0 ? (
          <>
            {/* PDF Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={prevPdf}
                disabled={pdfFiles.length <= 1}
                className={`p-2 rounded-full ${pdfFiles.length <= 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-gray-700'}`}
              >
                <FiChevronLeft size={24} />
              </button>
              
              <div className="flex-1 mx-4 overflow-x-auto">
                <div className="flex space-x-2">
                  {pdfFiles.map((file, index) => (
                    <div 
                      key={index}
                      onClick={() => setCurrentPdfIndex(index)}
                      className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition-colors ${currentPdfIndex === index ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    >
                      <FiFile className="mr-2" />
                      <span className="truncate max-w-xs">{file.name}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removePdf(index);
                        }}
                        className="ml-2 text-gray-300 hover:text-white"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={nextPdf}
                disabled={pdfFiles.length <= 1}
                className={`p-2 rounded-full ${pdfFiles.length <= 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-gray-700'}`}
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[65vh] bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={pdfFiles[currentPdfIndex]?.url}
                width="100%"
                height="100%"
                className="border-none"
                title={pdfFiles[currentPdfIndex]?.name}
              />
            </div>

            {/* Download Button */}
            <div className="mt-6 text-center">
              <a 
                href={pdfFiles[currentPdfIndex]?.url} 
                download={pdfFiles[currentPdfIndex]?.name}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                <FiDownload className="mr-2" />
                Download Current PDF
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-gray-800/50 rounded-xl">
            <FiFile className="mx-auto text-5xl text-gray-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-400">No PDF files uploaded yet</h3>
            <p className="text-gray-500">Upload some PDFs to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MplUnit1;