import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";

const QRScanner = () => {
  const [showMenu, setShowMenu] = useState(false);
  const qrRef = useRef(null);
  const [fileResult, setFileResult] = useState();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (option) => {
    switch (option) {
      case "Upload":
        // Open file input for uploading from gallery
        {
          openDialog();
        }

        break;
      case "Scan":
        // Show menu for scanning using camera
        setShowMenu(true);
        break;
      default:
        break;
    }
  };
  const openDialog = () => {
    qrRef.current.openImageDialog();
  };
  const fileError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const fileScan = (result) => {
    if (result) {
      setFileResult(result);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
          <button
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow-md hover:bg-green-600   active:transform active:scale-90 transition-transform
          "
            onClick={toggleMenu}
          >
            Scan QR
          </button>
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 bg-emerald-900 text-white rounded shadow-md">
              <button
                className="block w-full px-4 py-2 hover:bg-green-400 focus:outline-purple-600 active:transform active:scale-110 transition-transform"
                onClick={() => handleMenuClick("Upload")}
              >
                Upload
              </button>

              <button
                className="block w-full px-4 py-2 hover:bg-green-400 focus:outline-purple-600 active:transform active:scale-110 transition-transform"
                onClick={() => handleMenuClick("Scan")}
              >
                Camera
              </button>
            </div>
          )}
          <QrReader
            ref={qrRef}
            delay={300}
            onError={fileError}
            onScan={fileScan}
            legacyMode={true}
          />
          <div className="font-semibold">Result : {fileResult}</div>
        </div>
      </div>
    </>
  );
};

export default QRScanner;
