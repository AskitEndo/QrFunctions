import React, { useState } from "react";

const QRGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  function generateQR() {
    if (!inputValue) {
      return;
    }
    let qrImage = document.getElementById("qrImage");

    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputValue;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
        <div className="flex justify-center mt-4 my-6">
          <input
            id="qrText"
            className="border-transparent text-center focus:outline-blue-600 "
            type="text"
            placeholder="Enter Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        {inputValue && (
          <div className="mx-5 my-5 " id="imgBox">
            <img src="" id="qrImage" />
          </div>
        )}
        <button
          className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 active:transform active:scale-90 transition-transform"
          onClick={generateQR}
        >
          Generate QR
        </button>
      </div>
    </div>
  );
};

export default QRGenerator;
