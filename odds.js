
export default function handler(req, res) {
  const odds = [
    {
      match: "India vs Pakistan",
      team1: "India",
      team2: "Pakistan",
      odds1: 2.1, // 1xBet
      odds2: 1.95 // BajiLive
    }
  ];
  res.status(200).json(odds);
}
