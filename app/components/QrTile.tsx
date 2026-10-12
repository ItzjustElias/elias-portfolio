"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QrTile({ value }: { value: string }) {
  return (
    <div className="qr">
      <QRCodeSVG
        value={value}
        size={288}
        level="M"
        bgColor="#e9e5da"
        fgColor="#11100e"
        title="QR code linking to the CV"
      />
    </div>
  );
}
