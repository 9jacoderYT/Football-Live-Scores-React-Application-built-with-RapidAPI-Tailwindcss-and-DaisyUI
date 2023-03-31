export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "953c5247bfmsh834e1258f271226p132277jsn7d296c0cfc3e",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const result = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};
