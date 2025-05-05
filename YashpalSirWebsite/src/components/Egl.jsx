import React, { useState, useRef } from "react";
import { FiUpload, FiDownload, FiX, FiFile, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Egl = () => {
  const [pdfFiles, setPdfFiles] = useState([
    { name: "", url: "" },
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
        <h1 className="text-4xl font-bold text-white mb-10 mt-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
         Engineering Grpahics Notes
        </h1>
          <div className="text-center py-12 bg-gray-800/50 rounded-xl">
            <FiFile className="mx-auto text-5xl text-gray-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-400">No PDF files uploaded yet</h3>
          </div>
      </div>
    </div>
  );
};

export default Egl;