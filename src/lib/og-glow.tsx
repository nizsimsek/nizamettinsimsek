import { ReactElement } from "react";
import { TECH_STACK } from "./og-assets";

export function renderGlowOg(photoSrc: string): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#070b14",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          left: -160,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.38) 0%, rgba(59,130,246,0) 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -260,
          right: -120,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0) 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 24,
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.72) 0%, rgba(9,13,22,0.72) 100%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          gap: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              background: "rgba(59,130,246,0.14)",
              border: "1px solid rgba(96,165,250,0.35)",
              color: "#93c5fd",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 1,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#60a5fa",
                display: "flex",
              }}
            />
            FRONTEND DEVELOPER
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              marginTop: 30,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Nizamettin
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Şimşek
          </div>
          <div
            style={{
              fontSize: 27,
              color: "#cbd5e1",
              marginTop: 24,
              display: "flex",
              lineHeight: 1.4,
              maxWidth: 560,
            }}
          >
            Architecting the multi-role SaaS platform at
            <span style={{ color: "#93c5fd", fontWeight: 700, marginLeft: 8 }}>
              Let&nbsp;Wash
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 36,
              flexWrap: "wrap",
            }}
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#e2e8f0",
                  fontSize: 21,
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
              padding: "12px 28px",
              borderRadius: 12,
              background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            View Portfolio →
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: 6,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
              boxShadow: "0 30px 80px rgba(59,130,246,0.35)",
            }}
          >
            <img
              src={photoSrc}
              width={300}
              height={300}
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                objectFit: "cover",
                border: "6px solid #070b14",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            nizamettinsimsek.com.tr
          </div>
        </div>
      </div>
    </div>
  );
}
