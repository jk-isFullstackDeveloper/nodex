import { NextResponse } from "next/server";

const demoUser = {
    email: "demo@example.com",
    password: "password123"
};

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ success: false, errors: "Email and password are required" }, { status: 400 });
        }

        if (email === demoUser.email && password === demoUser.password) {
            return NextResponse.json({
                success: true,
                message: "Login successful",
                user: { email }
            });
        } else {
            return NextResponse.json({ success: false, errors: "Invalid email or password" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, errors: "Invalid request body" }, { status: 400 });
    }
}
