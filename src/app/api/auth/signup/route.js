import { NextResponse } from "next/server";

const users = [];

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        if (users.find(user => user.email === email)) {
            return NextResponse.json({ success: false, errors: "Email already registered" }, { status: 400 });
        }

        users.push({ name, email, password });

        return NextResponse.json({
            success: true,
            message: "Signup successful",
            user: { name, email }
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ success: false, errors: "Invalid request body" }, { status: 400 });
    }
}
