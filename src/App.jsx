import React from "react";
import QRGenerator from "./components/QRGenerator.jsx";
import QRScanner from "./components/QRScanner.jsx";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-500">
        <QRGenerator />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-800">
        <QRScanner />
      </div>
    </div>
  );
}

export default App;
