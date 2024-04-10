export async function POST(request: Request) {
    const message = await request.json()

    const { username, password } = message

    if (!username) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    if (!password) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    const response = await fetch(process.env.REGISTER_URL!, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
      });

    if (!response.ok) {
        return new Response(JSON.stringify({ message }), { status: 400 })
    }

    const data = await response.json()
    
    return new Response(JSON.stringify({ message: data.message }), { status: 200 })
}
