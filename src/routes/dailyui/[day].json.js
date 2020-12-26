import challenges from "./_challenges.js";

const lookup = new Map();
challenges.forEach((challenge) => {
  lookup.set(challenge.day, JSON.stringify(challenge));
});

export function get(req, res, next) {
  const { day } = req.params;

  if (lookup.has(day)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(day));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
