export default async function handler(req, res) {
  try {
    const { matchId } = req.query;

    if (!matchId) {
      return res.status(400).json({
        error: "matchId required"
      });
    }

    const response = await fetch(
      `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/hscard`,
      {
        headers: {
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          "x-rapidapi-key": "3369e19d10msh91a7df734747469p12868ejsn9c331e41f555"
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
