const BASE_URL = "http://localhost:5000";

export async function apiGet(url) {
  const res = await fetch(BASE_URL + url);
  if (!res.ok) throw new Error("API error");
  return res.json();
}

export async function apiPost(url, data) {
  const res = await fetch(BASE_URL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("API error");
  return res.json();
}