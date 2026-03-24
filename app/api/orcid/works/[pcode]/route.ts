import https from "node:https";
import { NextResponse } from "next/server";

const ORCID_ID = "0000-0001-9238-3149";
const ORCID_TIMEOUT_MS = 10_000;

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { Accept: "application/json" } },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks).toString()));
        res.on("error", reject);
      }
    );
    req.setTimeout(ORCID_TIMEOUT_MS, () => {
      req.destroy(new Error("ORCID request timed out"));
    });
    req.on("error", reject);
  });
}

export async function GET(
  _req: Request,
  props: { params: Promise<{ pcode: string }> }
) {
  const { pcode } = await props.params;

  let raw: string;
  try {
    raw = await httpsGet(
      `https://pub.orcid.org/v3.0/${ORCID_ID}/works/${pcode}`
    );
  } catch (err) {
    return NextResponse.json(
      { message: (err as Error).message },
      { status: 500 }
    );
  }

  try {
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "Invalid response from ORCID" },
      { status: 500 }
    );
  }
}
