import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css'; // Make sure to create this CSS file for styling

function App() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQRCode = () => {
    if (productId && quantity) {
      setShowQRCode(true);
    } else {
      alert('Please enter both Product ID and Quantity');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <h1 className="title">QR Code Generator</h1>
      <div className="input-container">
        <label className="label">Product ID:</label>
        <input
          type="text"
          className="input"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="label">Quantity:</label>
        <input
          type="number"
          className="input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleGenerateQRCode}>
        Generate QR Code
      </button>
      {showQRCode && (
        <div className="qr-container">
          <QRCode value={`Product ID: ${productId}, Quantity: ${quantity}`} />
          <br></br>
          <button className="button" onClick={handlePrint}>
            Print QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
