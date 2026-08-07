import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KiddoKlub · soft-play parties in Doha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #F5EFE6 0%, #E8DCC4 60%, #E4B4B4 100%)",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#6B6F6A",
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        KiddoKlub · Doha
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontSize: 88,
            lineHeight: 1.05,
            color: "#1F2421",
            fontWeight: 600,
          }}
        >
          Parties your child will remember.
          <br />
          <span style={{ color: "#C97D60", fontStyle: "italic" }}>
            Setups your guests will photograph.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          color: "#1F2421",
        }}
      >
        <div style={{ fontSize: 26, opacity: 0.75 }}>
          kiddoklubdoha.com · WhatsApp +974 5031 8434
        </div>
        <div style={{ fontSize: 22, color: "#C97D60", letterSpacing: 2 }}>
          Just 10 parties a month
        </div>
      </div>
    </div>,
    { ...size },
  );
}
