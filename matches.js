export default async function handler(req, res) {
  try {
    const today = new Date().toISOString().split("T")[0];

    const apiUrl = `https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`;

    const response = await fetch(apiUrl, {
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY,
      },
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=60");

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: err.message,
    });
  }
}
