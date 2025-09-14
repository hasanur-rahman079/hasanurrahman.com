"use server";

export async function getContributions(year: number): Promise<number> {
  const query = `
    {
      user(login: "hasanur-rahman079") {
        contributionsCollection(
          from: "${year}-01-01T00:00:00Z"
          to: "${year}-12-31T23:59:59Z"
        ) {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`, // create a PAT
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }, // cache for 1h
  });

  const json = await res.json();

  // Add error handling
  if (!res.ok) {
    console.error("GitHub API response not ok:", res.status, res.statusText);
    console.error("Response body:", json);
    throw new Error(`GitHub API error: ${res.status}`);
  }

  if (json.errors) {
    console.error("GitHub API errors:", json.errors);
    throw new Error(`GitHub API errors: ${JSON.stringify(json.errors)}`);
  }

  if (
    !json.data ||
    !json.data.user ||
    !json.data.user.contributionsCollection
  ) {
    console.error("Invalid response structure:", json);
    throw new Error("Invalid response structure from GitHub API");
  }

  return json.data.user.contributionsCollection.contributionCalendar
    .totalContributions;
}

export async function getTotalContributions(): Promise<number> {
  const currentYear = new Date().getFullYear();
  const startYear = 2020; // Starting from 2020 as mentioned
  let totalContributions = 0;

  // Fetch contributions for each year from 2020 to current year
  for (let year = startYear; year <= currentYear; year++) {
    const query = `
      {
        user(login: "hasanur-rahman079") {
          contributionsCollection(
            from: "${year}-01-01T00:00:00Z"
            to: "${year}-12-31T23:59:59Z"
          ) {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 }, // cache for 1h
      });

      const json = await res.json();

      // Add error handling
      if (!res.ok) {
        console.error(
          `GitHub API response not ok for year ${year}:`,
          res.status,
          res.statusText
        );
        continue; // Skip this year and continue with others
      }

      if (json.errors) {
        console.error(`GitHub API errors for year ${year}:`, json.errors);
        continue; // Skip this year and continue with others
      }

      if (
        json.data &&
        json.data.user &&
        json.data.user.contributionsCollection
      ) {
        const yearContributions =
          json.data.user.contributionsCollection.contributionCalendar
            .totalContributions;
        totalContributions += yearContributions;
        console.log(`Year ${year}: ${yearContributions} contributions`);
      }
    } catch (error) {
      console.error(`Error fetching contributions for year ${year}:`, error);
      // Continue with other years even if one fails
    }
  }

  console.log(
    `Total contributions from ${startYear} to ${currentYear}: ${totalContributions}`
  );
  return totalContributions;
}
