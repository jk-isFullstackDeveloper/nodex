import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const data = Object.fromEntries(searchParams.entries());

        return NextResponse.json({
            success: true,
            data:data || [{ email: "jk770225@gmail.com" }],
            message: "Successfully fetched user data",
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error !" });
    }

}
