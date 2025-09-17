import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { name, email, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the contact submission in the database
    const { data: contactData, error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          message,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to store contact submission" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Contact submission stored:", contactData);

    // Send notification email to you (Ulthi)
    const notificationEmailResponse = await resend.emails.send({
      from: "Contact Form <contact@yourdomain.com>", // Replace with your verified domain
      to: ["ulthiveera05@gmail.com"], // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent through your portfolio contact form at ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      `,
    });

    if (notificationEmailResponse.error) {
      console.error("Failed to send notification email:", notificationEmailResponse.error);
      // Still return success since the message was stored in the database
    } else {
      console.log("Notification email sent successfully:", notificationEmailResponse.data);
    }

    // Send confirmation email to the person who submitted the form
    const confirmationEmailResponse = await resend.emails.send({
      from: "Ulthi Veerabhadrappa <noreply@yourdomain.com>", // Replace with your verified domain
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting me, ${name}!</h2>
          <p style="color: #555; line-height: 1.6;">
            I have received your message and will get back to you as soon as possible. 
            I appreciate you taking the time to reach out.
          </p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="color: #666; line-height: 1.6;">"${message}"</p>
          </div>
          <p style="color: #555;">
            Best regards,<br>
            <strong>Ulthi Veerabhadrappa</strong><br>
            B.Tech Computer Science & Engineering Student<br>
            <em>Email: ulthiveera05@gmail.com</em>
          </p>
        </div>
      `,
    });

    if (confirmationEmailResponse.error) {
      console.error("Failed to send confirmation email:", confirmationEmailResponse.error);
    } else {
      console.log("Confirmation email sent successfully:", confirmationEmailResponse.data);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: contactData.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in contact-form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);