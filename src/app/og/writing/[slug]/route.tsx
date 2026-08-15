import { ImageResponse } from "next/og";
import { writings } from "@/data/writings";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const writing = writings.find((entry) => entry.slug === slug);

  if (!writing) {
    return new Response("Writing not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f6f6f8",
          color: "#16181d",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#5c6270",
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {writing.type} · {writing.year}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: "1000px",
            }}
          >
            {writing.title}
          </div>
          <div
            style={{
              color: "#5c6270",
              display: "flex",
              fontSize: 31,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: "920px",
            }}
          >
            {writing.description}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid #16181d",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 24,
          }}
        >
          <span>rabeeh t a</span>
          <span style={{ color: "#5c6270" }}>rabeeta.xyz</span>
        </div>
      </div>
    ),
    {
      height: 630,
      width: 1200,
    },
  );
}
