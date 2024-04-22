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
      // case "Scan":
      //   // Show menu for scanning using camera
      //   setShowMenu(true);
      //   break;
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

  const camError = (error) => {
    if (error) {
      console.log(error);
    }
  };
  const camScan = (result) => {
    if (result) {
      setFileResult(result);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="bg-white p-12 rounded shadow-md flex flex-col items-center">
          <button
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow-md hover:bg-green-600   active:transform active:scale-90 transition-transform
          "
            onClick={toggleMenu}
          >
            Scan QR
          </button>
          {showMenu && (
            <div className="flex  p-2 absolute top-full right-0 mt-2 bg-emerald-900 text-white rounded shadow-md">
              <button
                className="block w-full px-4 py-2 rounded-sm hover:bg-green-400  active:transform active:scale-110 transition-transform"
                onClick={() => handleMenuClick("Upload")}
              >
                Upload
                <QrReader
                  ref={qrRef}
                  delay={300}
                  onError={fileError}
                  onScan={fileScan}
                  legacyMode={true}
                />
              </button>

              <span
                className="block w-full px-4 py-2 rounded-sm hover:bg-green-400 active:transform active:bg-emerald-200 active:text-black transition-transform"
                // onClick={() => handleMenuClick("Scan")}
              >
                Camera
                <QrReader
                  delay={300}
                  onError={camError}
                  onScan={camScan}
                  legacyMode={false}
                />
              </span>
            </div>
          )}
          <div className="font-semibold">Result : {fileResult}</div>
        </div>
      </div>
    </>
  );
};

export default QRScanner;
