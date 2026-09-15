import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#2a1512",
          backgroundImage:
            "linear-gradient(135deg, #4a1712 0%, #2a1512 55%, #241512 100%)",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 999,
            backgroundColor: "#a8483a",
            color: "#faf7f2",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          P
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 68,
            fontWeight: 700,
            color: "#faf7f2",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#d4a24c",
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "rgba(250,247,242,0.7)",
            display: "flex",
          }}
        >
          Kansas · Missouri · Illinois · Iowa · Indiana
        </div>
      </div>
    ),
    { ...size }
  );
}
