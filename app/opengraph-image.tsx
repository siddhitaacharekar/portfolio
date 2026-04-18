import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1200px 700px at 85% 15%, rgba(212,180,122,0.32), transparent 60%), radial-gradient(900px 500px at 10% 95%, rgba(212,180,122,0.18), transparent 70%), #f6f1e5",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* grain + frame */}
        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(33,31,24,0.08)",
            borderRadius: "32px",
            pointerEvents: "none",
          }}
        />

        {/* TOP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "18px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8a7b55",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "#c8a657",
                display: "block",
              }}
            />
            Product Portfolio · 2026
          </div>
          <div
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              color: "#3a342a",
            }}
          >
            siddhitaacharekar.com
          </div>
        </div>

        {/* CENTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "120px",
              fontStyle: "italic",
              lineHeight: 0.95,
              color: "#1c1a16",
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Siddhita</span>
            <span style={{ color: "#9c7c33" }}>Acharekar.</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#5a5141",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 300,
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            Product Manager turning ambiguous problems into clear product
            decisions — unit economics, GTM strategy, and real case studies.
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ fontSize: "56px", color: "#1c1a16", fontStyle: "italic" }}>
                12
              </div>
              <div style={{ fontSize: "16px", color: "#8a7b55", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Portfolio pieces
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ fontSize: "56px", color: "#1c1a16", fontStyle: "italic" }}>
                4
              </div>
              <div style={{ fontSize: "16px", color: "#8a7b55", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Products studied
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ fontSize: "56px", color: "#1c1a16", fontStyle: "italic" }}>
                Mumbai
              </div>
              <div style={{ fontSize: "16px", color: "#8a7b55", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Open to roles
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "14px 28px",
              background: "#1c1a16",
              color: "#f6f1e5",
              borderRadius: "100px",
              fontSize: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            View portfolio →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
