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
    const matches = [];

    data.typeMatches?.forEach(type => {
      type.seriesMatches?.forEach(series => {
        const wrapper = series.seriesAdWrapper;

        if (
          wrapper &&
          wrapper.seriesName &&
          wrapper.seriesName.includes("Indian Premier League")
        ) {
          wrapper.matches?.forEach(match => {
            matches.push({
              series: wrapper.seriesName,
              team1: match.matchInfo.team1.teamName,
              team2: match.matchInfo.team2.teamName,
              team1Short: match.matchInfo.team1.teamSName,
              team2Short: match.matchInfo.team2.teamSName,
              status: match.matchInfo.status,
              venue: match.matchInfo.venueInfo.ground,
              city: match.matchInfo.venueInfo.city,
              format: match.matchInfo.matchFormat,

              team1Score:
                match.matchScore?.team1Score?.inngs1?.runs || 0,
              team1Wickets:
                match.matchScore?.team1Score?.inngs1?.wickets || 0,
              team1Overs:
                match.matchScore?.team1Score?.inngs1?.overs || 0,

              team2Score:
                match.matchScore?.team2Score?.inngs1?.runs || 0,
              team2Wickets:
                match.matchScore?.team2Score?.inngs1?.wickets || 0,
              team2Overs:
                match.matchScore?.team2Score?.inngs1?.overs || 0
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
      success: false,
      error: error.message
    });
  }
}
