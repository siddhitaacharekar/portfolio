import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#10b981",
          color: "#04241a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: -0.5,
          fontFamily: "Arial, Helvetica, sans-serif",
          borderRadius: 7,
        }}
      >
        SA
      </div>
    ),
    { ...size }
  );
}