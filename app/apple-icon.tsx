import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1F2421 0%, #2D2A26 100%)",
          color: "#F5EFE6",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 110,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
