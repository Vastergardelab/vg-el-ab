import { ImageResponse } from "next/og";

export const alt = "Västergård El – elektriker i Helsingborg";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, color: "#fdba74", fontWeight: 700 }}>
          VÄSTERGÅRD EL
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 28, lineHeight: 1.05 }}>
          Elektriker i Helsingborg
        </div>
        <div style={{ fontSize: 36, color: "#e2e8f0", marginTop: 26 }}>
          Elinstallation · Felsökning · Nätverk · Jour 24/7
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 52 }}>
          <div
            style={{
              display: "flex",
              background: "#f97316",
              borderRadius: 16,
              padding: "14px 26px",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            073-531 22 47
          </div>
          <div style={{ fontSize: 28, color: "#cbd5e1" }}>vastergardel.se</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
