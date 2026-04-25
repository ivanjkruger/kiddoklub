import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F2421",
          color: "#F5EFE6",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 38,
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
