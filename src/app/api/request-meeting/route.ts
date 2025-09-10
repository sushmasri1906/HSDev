import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { z } from "zod";

const prisma = new PrismaClient();

// 1. Zod Schema (no datetime)
const meetingSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email"),
	message: z.string().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		// 2. Validate request body
		const result = meetingSchema.safeParse(body);
		if (!result.success) {
			return NextResponse.json(
				{ status: "error", errors: result.error.flatten().fieldErrors },
				{ status: 400 }
			);
		}

		const { name, email, message } = result.data;

		const newRequest = await prisma.meetingRequest.create({
			data: {
				name,
				email,
				description: message,
			},
		});

		// 4. Send email
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"HSDev Website" <${process.env.SMTP_USER}>`,
			to: process.env.SMTP_USER,
			subject: "📩 New Meeting Request",
			text: `
📩 New Meeting Request

👤 Name: ${name}
📧 Email: ${email}
📝 Message: ${message}
			`,
		});

		return NextResponse.json({ status: "success", data: newRequest });
	} catch (error) {
		console.error("Meeting request failed:", error);
		return NextResponse.json(
			{ status: "error", message: "Server error" },
			{ status: 500 }
		);
	}
}
