export async function GET() {
  try {
    const response = await fetch(process.env.FETCH_VID_URL!);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: "There was an error fetching data" }),
        { status: 500 }
      );
    }

    const data = await response.json();
    const videos = data.data

    if (!videos) {
      return new Response(JSON.stringify({ message: [] }), { status: 200 })
    }

    return new Response(JSON.stringify({ message: videos }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "There was an error fetching data" }),
      { status: 500 }
    );
  }
}
