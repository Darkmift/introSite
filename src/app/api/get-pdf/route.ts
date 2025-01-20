import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, res: NextResponse) {
  try {
    return NextResponse.json(
      { pdfUrl: "https://drive.google.com/uc?export=download&id=17iOQ6aG6g3NHdZFl9iUZ1PjIBQYOIjsL" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in fetching PDF:", error);
    Response.json({ error: "Failed to fetch the PDF" });
  }
}
