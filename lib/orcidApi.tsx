// Functions for Orcid fetch
export async function fetchOrcidAPI(url: string) {
  // const headers = { "Content-Type": "application/json" };
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  };

  const res = await fetch(url, {
    headers,
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function fetchAuthorsAPI(url: string) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "GET",
  });
  const json = await res.json();
  return json;
}

// fetch publications data
export async function getPublicationsFromOrcid(endpoint: string) {
  const data = await fetchOrcidAPI(
    `https://pub.orcid.org/v3.0/0000-0001-9238-3149/${endpoint}`
  );

  return data?.group;
}
