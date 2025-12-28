import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EnquiryRequest {
  name: string;
  phone: string;
  email?: string;
  lookingFor?: string;
  area?: string;
  message?: string;
  propertyTitle?: string;
  source: "contact_form" | "property_enquiry";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: EnquiryRequest = await req.json();
    console.log("Received enquiry:", data);

    const { name, phone, email, lookingFor, area, message, propertyTitle, source } = data;

    // Build email content
    let subject = "";
    let htmlContent = "";

    if (source === "property_enquiry" && propertyTitle) {
      subject = `🏠 New Property Enquiry: ${propertyTitle}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🏠 New Property Enquiry</h1>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #DC2626; margin-top: 0;">Property: ${propertyTitle}</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="tel:${phone}" style="color: #DC2626;">${phone}</a></td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}" style="color: #DC2626;">${email}</a></td>
              </tr>
              ` : ''}
              ${message ? `
              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px;">${message}</td>
              </tr>
              ` : ''}
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #DC2626; border-radius: 8px; text-align: center;">
              <a href="tel:${phone}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">
                📞 Call ${name} Now
              </a>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
            This enquiry was submitted via Kapahi Properties website
          </p>
        </div>
      `;
    } else {
      subject = `📩 New Contact Enquiry from ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📩 New Contact Enquiry</h1>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="tel:${phone}" style="color: #DC2626;">${phone}</a></td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}" style="color: #DC2626;">${email}</a></td>
              </tr>
              ` : ''}
              ${lookingFor ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Looking For:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${lookingFor}</td>
              </tr>
              ` : ''}
              ${area ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5; font-weight: bold;">Area of Interest:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e5e5;">${area}</td>
              </tr>
              ` : ''}
              ${message ? `
              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">Requirements:</td>
                <td style="padding: 10px;">${message}</td>
              </tr>
              ` : ''}
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #DC2626; border-radius: 8px; text-align: center;">
              <a href="tel:${phone}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">
                📞 Call ${name} Now
              </a>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
            This enquiry was submitted via Kapahi Properties website
          </p>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Kapahi Properties <onboarding@resend.dev>",
      to: ["kapahipropertieskp@gmail.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-enquiry function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
