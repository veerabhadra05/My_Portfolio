import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

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

    // Send data to n8n webhook for email handling
    const webhookPayload = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      submissionId: contactData.id
    };

    console.log("Sending webhook payload:", webhookPayload);
    console.log("Webhook URL:", "https://veerabhadrappa.app.n8n.cloud/webhook-test/portfolio");

    try {
      const webhookResponse = await fetch("https://veerabhadrappa.app.n8n.cloud/webhook-test/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      console.log("Webhook response status:", webhookResponse.status);
      console.log("Webhook response headers:", Object.fromEntries(webhookResponse.headers.entries()));
      
      if (!webhookResponse.ok) {
        const responseText = await webhookResponse.text();
        console.error("Failed to trigger n8n webhook:", {
          status: webhookResponse.status,
          statusText: webhookResponse.statusText,
          responseBody: responseText,
          url: "https://veerabhadrappa.app.n8n.cloud/webhook-test/portfolio"
        });
        // Still return success since the message was stored in the database
      } else {
        const responseText = await webhookResponse.text();
        console.log("n8n webhook triggered successfully:", {
          status: webhookResponse.status,
          responseBody: responseText
        });
      }
    } catch (webhookError) {
      console.error("Error calling n8n webhook:", {
        error: webhookError.message,
        stack: webhookError.stack,
        url: "https://veerabhadrappa.app.n8n.cloud/webhook-test/portfolio"
      });
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