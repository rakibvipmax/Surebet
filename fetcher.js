
export async function fetchOdds(apiUrl) {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}
