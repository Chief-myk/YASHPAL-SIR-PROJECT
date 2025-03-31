// components/LoadingSpinner.js
const LoadingSpinner = () => {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    );
  };
  
  export default LoadingSpinner;