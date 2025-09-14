import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Load the custom font file
const fontPath = join(
  process.cwd(),
  "public",
  "fonts",
  "kaisei-tokumin-bold.ttf"
);
let fontData: ArrayBuffer;

try {
  const fontBuffer = readFileSync(fontPath);
  fontData = fontBuffer.buffer.slice(
    fontBuffer.byteOffset,
    fontBuffer.byteOffset + fontBuffer.byteLength
  );
} catch (error) {
  console.error("Failed to load custom font:", error);
  // Fallback to system font if custom font fails
  fontData = new ArrayBuffer(0);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postTitle = searchParams.get("title") || "MD. Hasanur Rahman";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: "url(https://www.hasanurrahman.me/og-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          marginLeft: 190,
          marginRight: 190,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Main title with custom font */}
        <div
          style={{
            fontSize: 100,
            fontFamily: fontData.byteLength > 0 ? "Kaisei Tokumin" : "serif",
            fontWeight: "bold",
            letterSpacing: "-0.02em",
            color: "white",
            lineHeight: "1.1",
            marginBottom: 20,
            textShadow: "0 4px 8px rgba(0,0,0,0.5)",
            maxWidth: "1680px",
            wordWrap: "break-word",
          }}
        >
          {postTitle}
        </div>
      </div>
    </div>,
    {
      width: 1920,
      height: 1080,
      fonts:
        fontData.byteLength > 0
          ? [
              {
                name: "Kaisei Tokumin",
                data: fontData,
                style: "normal",
              },
            ]
          : [],
    }
  );
}
