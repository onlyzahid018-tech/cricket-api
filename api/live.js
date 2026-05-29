export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "Cricket API Working 🔥",
    matches: [
      {
        team1: "IND",
        team2: "AUS",
        score: "187/3",
        overs: "18.2",
        status: "India need 12 runs in 10 balls"
      },
      {
        team1: "RCB",
        team2: "CSK",
        score: "210/5",
        overs: "20",
        status: "RCB won by 15 runs"
      }
    ]
  });
}
