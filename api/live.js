export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
          "x-rapidapi-key": "3369e19d10msh91a7df734747469p12868ejsn9c331e41f555"
        }
      }
    );

    const data = await response.json();

    let matches = [];

    data.typeMatches.forEach(type => {
      type.seriesMatches.forEach(series => {

        if (series.seriesAdWrapper) {

          series.seriesAdWrapper.matches.forEach(match => {

            matches.push({
              series: match.matchInfo.seriesName,
              match: `${match.matchInfo.team1.teamSName} vs ${match.matchInfo.team2.teamSName}`,
              status: match.matchInfo.status,
              format: match.matchInfo.matchFormat,
              venue: match.matchInfo.venueInfo.ground,

              score1: match.matchScore?.team1Score?.inngs1?.runs || 0,
              wickets1: match.matchScore?.team1Score?.inngs1?.wickets || 0,

              score2: match.matchScore?.team2Score?.inngs1?.runs || 0,
              wickets2: match.matchScore?.team2Score?.inngs1?.wickets || 0
            });

          });

        }

      });
    });

    res.status(200).json({
      success: true,
      total: matches.length,
      matches
    });

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch live data",
      details: error.toString()
    });

  }
}
