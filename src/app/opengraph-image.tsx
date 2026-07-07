import { ImageResponse } from "next/og";

export const alt = "Nizamettin Şimşek - Co-founder & Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Nizamettin Şimşek
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#d1d5db",
            marginBottom: 32,
          }}
        >
          Co-founder & Frontend Developer
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#93c5fd",
            marginBottom: 32,
          }}
        >
          Let Wash · Palo Alto
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          React · Next.js · TypeScript · TailwindCSS
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            color: "#6b7280",
          }}
        >
          nizamettinsimsek.com.tr
        </div>
      </div>
    ),
    { ...size }
  );
}
