export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=DEMO_KEY&offset=0"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch schedule"
    });
  }
}
