export async function POST(request: Request) {
    const data = await request.json()

    if (!data) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    const response = await fetch(process.env.DB_URL!, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    if (!response.ok) {
        return new Response(JSON.stringify({ message: data }), { status: 400 })
    }

    return new Response(JSON.stringify({ message: data }), { status: 200 })
}
