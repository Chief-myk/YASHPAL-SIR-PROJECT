import React, { useState, useRef, useEffect } from "react";
import {
  FiUpload,
  FiDownload,
  FiX,
  FiFile,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const MplUnit4 = () => {
  const fileInputRef = useRef(null);

  // Unified documents list (PPT + PDF)
  const [allDocs, setAllDocs] = useState([
    {
      name: "unit 4.2 Manufacturing of Plastic component.pptx",
      type: "ppt",
      url: "/assets/MPL/unit4/4.2ManufacturingofPlasticcomponent.pptx",
      previewUrl: `https://docs.google.com/viewer?url=${encodeURIComponent(
        window.location.origin + "/assets/MPL/unit4/4.2ManufacturingofPlasticcomponent.pptx"
      )}&embedded=true`,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file upload (PDFs only)
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map((file) => ({
      name: file.name,
      type: "pdf",
      url: URL.createObjectURL(file),
    }));
    setAllDocs((prev) => [...prev, ...newDocs]);
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
    const newDocs = files.map((file) => ({
      name: file.name,
      type: "pdf",
      url: URL.createObjectURL(file),
    }));
    setAllDocs((prev) => [...prev, ...newDocs]);
  };

  const removeDoc = (index) => {
    const updated = allDocs.filter((_, i) => i !== index);
    setAllDocs(updated);
    if (currentIndex >= updated.length) {
      setCurrentIndex(Math.max(0, updated.length - 1));
    }
  };

  const nextDoc = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allDocs.length);
  };

  const prevDoc = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allDocs.length) % allDocs.length);
  };

  const currentDoc = allDocs[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Manufacturing Process Learning
        </h1>
        <p className="text-gray-300 text-center mb-8">Unit 4 - Study Materials</p>

        {/* Upload Area (Optional: Uncomment to Enable Upload) */}
        {/* <div
          className={`mb-8 p-8 border-2 border-dashed rounded-xl text-center transition-all ${
            isDragging ? "border-purple-500 bg-gray-800" : "border-gray-600 bg-gray-800/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <FiUpload className="mx-auto text-4xl text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {isDragging ? "Drop your PDFs here" : "Upload PDF Files"}
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

        {allDocs.length > 0 ? (
          <>
            {/* Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevDoc}
                disabled={allDocs.length <= 1}
                className={`p-2 rounded-full ${
                  allDocs.length <= 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
                }`}
              >
                <FiChevronLeft size={24} />
              </button>

              <div className="flex-1 mx-4 overflow-x-auto">
                <div className="flex space-x-2">
                  {allDocs.map((file, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                        currentIndex === index
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      <FiFile className="mr-2" />
                      <span className="truncate max-w-xs">{file.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDoc(index);
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
                onClick={nextDoc}
                disabled={allDocs.length <= 1}
                className={`p-2 rounded-full ${
                  allDocs.length <= 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
                }`}
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Document Viewer */}
            <div className="w-full h-[65vh] bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={
                  currentDoc.type === "ppt"
                    ? currentDoc.previewUrl
                    : currentDoc.url
                }
                width="100%"
                height="100%"
                className="border-none"
                title={currentDoc.name}
              />
            </div>

            {/* Download Button */}
            <div className="mt-6 text-center">
              <a
                href={currentDoc.url}
                download={currentDoc.name}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                <FiDownload className="mr-2" />
                Download Current File
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-gray-800/50 rounded-xl">
            <FiFile className="mx-auto text-5xl text-gray-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-400">
              No documents available yet
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MplUnit4;
