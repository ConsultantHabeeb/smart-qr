import React, { useRef } from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ productId, quantity }) => {
  const qrRef = useRef();

  const handlePrint = () => {
    const qrCode = qrRef.current.querySelector('canvas').toDataURL();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR Code</title>
          <style>
            @media print {
              body * {
                visibility: hidden;
              }
              #print-content {
                visibility: visible;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          </style>
        </head>
        <body>
          <div id="print-content">
            <img src="${qrCode}" />
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const qrValue = `Product ID: ${productId}, Quantity: ${quantity}`;

  return (
    <div>
      <div ref={qrRef}>
        <QRCode value={qrValue} />
      </div>
      <button onClick={handlePrint}>Print QR Code</button>
    </div>
  );
};

export default QRCodeComponent;
