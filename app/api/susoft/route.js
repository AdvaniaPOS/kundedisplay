let lastTransaction = null;

export async function POST(req) {
  const body = await req.json();
  lastTransaction = body;
  return new Response("OK", { status: 200 });
}

export async function GET() {
  if (!lastTransaction) {
    return new Response(JSON.stringify({ error: "Ingen transaksjon enda" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify(lastTransaction), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
