import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const plan = formData.get("plan")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const storeUrl = formData.get("storeUrl")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !plan || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, plan, and message are required." },
        { status: 400 }
      );
    }

    if (!["Starter", "Growth", "Premium"].includes(plan)) {
      return NextResponse.json({ error: "Please select a valid plan." }, { status: 400 });
    }

    if (![
      "Amazon Marketplace Management",
      "TikTok Shop Growth",
      "Wayfair Seller Optimization",
      "PPC & Ads Management",
      "Listing & SEO Optimization",
    ].includes(service)) {
      return NextResponse.json({ error: "Please select a valid service." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
from: "GrowX Website <noreply@getgrowx.com>",
      to: ["admingrowx@gmail.com"],
      replyTo: email,
      subject: `New GrowX Enquiry from ${name}`,
      html: `
        <h2>New GrowX Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Pricing plan:</strong> ${plan}</p>

        <p><strong>How we can help:</strong> ${service}</p>

        <p><strong>Store URL:</strong> ${
          storeUrl || "Not provided"
        }</p>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
