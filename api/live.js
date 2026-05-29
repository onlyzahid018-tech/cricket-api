export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          "x-rapidapi-key": "YOUR_API_KEY"
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch live cricket data",
      details: error.toString()
    });
  }
}
