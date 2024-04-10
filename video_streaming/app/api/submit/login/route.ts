import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const message = await request.json()
    const { username, password } = message

    if (!username) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    if (!password) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    const result = await fetch(process.env.LOGIN_URL!, {
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

    if (!result.ok) {
        return new Response(JSON.stringify({ message: "There was an error validating your credentials" }), { status: 400 })
    }

    const data = await result.json()

    const response = NextResponse.json({
        message: "Authentication Successful!",
        user_id: data['user_id']
    })

    response.cookies.set("login", data['login'], {
        maxAge: 60 * 10
    })
    response.cookies.set("user_id", data['user_id'], {
        maxAge: 60 * 10
    })
    response.cookies.set("username", data['username'], {
        maxAge: 60 * 10
    })

    return response
}
