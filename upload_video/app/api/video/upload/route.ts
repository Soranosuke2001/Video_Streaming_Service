import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.formData()
    const file = data.get('file') as File
    const userId = request.cookies.get('user_id')?.value

    if (!userId) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }
    
    if (!file) {
        return new Response(JSON.stringify({ message: "The request was invalid" }), { status: 400 })
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId);
    
    const response = await fetch(process.env.UPLOAD_URL!, {
        method: 'POST',
        credentials: "include",
        body: formData,
    });

    if (!response.ok) {
        return new Response(JSON.stringify({ message: "There was an error uploading your video"}), { status: 500 })
    }
    
    return new Response(JSON.stringify({ message: "The request was successful" }), { status: 200 })
}
