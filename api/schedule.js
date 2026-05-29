export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    type: "schedule",
    matches: [
      {
        match: "IND vs AUS",
        date: "31 May 2026",
        time: "7:30 PM"
      },
      {
        match: "RCB vs CSK",
        date: "1 June 2026",
        time: "8:00 PM"
      }
    ]
  });
}
