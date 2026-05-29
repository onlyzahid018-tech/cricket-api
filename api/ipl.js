export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    tournament: "IPL 2026",
    matches: [
      {
        match: "RCB vs CSK",
        date: "1 June 2026",
        time: "8:00 PM"
      },
      {
        match: "MI vs KKR",
        date: "2 June 2026",
        time: "7:30 PM"
      }
    ]
  });
}
