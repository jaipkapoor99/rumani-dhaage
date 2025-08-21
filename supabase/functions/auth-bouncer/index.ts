// This function reads the admin emails from an environment variable.
// The variable should be a comma-separated string of email addresses.
const ADMIN_EMAILS_STR = Deno.env.get("ADMIN_EMAILS") || "";
const ADMIN_EMAILS = ADMIN_EMAILS_STR.split(",").map(email => email.trim());

Deno.serve(async (req: Request) => {
  try {
    // Ensure ADMIN_EMAILS is configured.
    if (!ADMIN_EMAILS_STR) {
      console.error("ADMIN_EMAILS environment variable is not set.");
      return new Response(
        JSON.stringify({ error: "Server configuration error." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const { record } = await req.json();
    const userEmail = record.email;

    console.log(`Processing signup for email: ${userEmail}`);

    if (!ADMIN_EMAILS.includes(userEmail)) {
      console.log(`Unauthorized email: ${userEmail}. Blocking signup.`);
      return new Response(
        JSON.stringify({ error: "This email is not authorized to sign up." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log(`Authorized email: ${userEmail}. Allowing signup.`);
    return new Response(JSON.stringify({ message: "User authorized." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in Edge Function:", (error as Error).message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
