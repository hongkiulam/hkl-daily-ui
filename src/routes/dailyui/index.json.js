import challenges from "./_challenges.js";

const contents = JSON.stringify(
  challenges.map((challenge) => {
    return {
      title: challenge.title,
      day: challenge.day,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
