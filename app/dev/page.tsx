import type { Metadata } from "next";
import { getContributions, getTotalContributions } from "@/server/github";
import { SiGithub } from "react-icons/si";

export const metadata: Metadata = {
  title: "Dev",
  description: "Besides research, I also code.",
};

export default async function DeveloperPage() {
  const year = new Date().getFullYear();
  
  let totalContributions = 0;
  let allTimeContributions = 0;
  
  try {
    totalContributions = await getContributions(year);
  } catch (error) {
    console.error('Error fetching current year contributions:', error);
  }
  
  try {
    allTimeContributions = await getTotalContributions();
  } catch (error) {
    console.error('Error fetching total contributions:', error);
  }

  return (
    <section>
      <h1 className="mb-8 font-bold font-serif text-3xl">Developer Mode</h1>

      <p className="mt-2 mb-8 text-neutral-700 dark:text-neutral-300">
        Besides research, I also code. I work with Node.js frameworks and Python
        Django to build full-stack applications — blending science with
        software.
      </p>

      <div className="my-4 space-y-4">
        <p>
          {totalContributions > 0 ? totalContributions : 'N/A'} github contributions in {year}. Total contributions since Jan 2, 2020 to present: {allTimeContributions > 0 ? allTimeContributions : 'N/A'}
        </p>


        <img
          alt={`GitHub Contributions ${year}`}
          className="w-full rounded-lg shadow p-2"
          src={`https://ghchart.rshah.org/38b000/hasanur-rahman079`}
        />

        <a className="font-semibold underline flex items-center gap-2" href="https://github.com/hasanur-rahman079" rel="noreferrer" target="_blank">More on my github <SiGithub /></a>
      </div>

      <div className="prose prose-neutral dark:prose-invert mt-12">
        <h3 id="tech-stack">Tech Stack</h3>
        <ul>
          <li>Node.js (Express, Honojs)</li>
          <li>Python (FastApi, Django)</li>
          <li>Frontend: React, Next.js</li>
          <li>Databases: PostgreSQL, MySQL</li>
          <li>Tools: Git, Docker</li>
        </ul>

        <h3 id="hardware">Highlighted Projects</h3>
        <ul>
          <li>
            <a
              href="https://research.abexbio.com/"
              rel="noreferrer"
              target="_blank"
            >
              ABEx Bio-Research Center
            </a>
          </li>
          <li>
            <a
              href="https://spromon.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              Personal Site (Salman Promon)
            </a>
          </li>
          <li>
            <a href="https://www.yaraf.me/" rel="noreferrer" target="_blank">
              Personal Site (Yusha Araf)
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-12 space-y-4">
        <p>
          I like building tools that connect biology with software. You’ll find
          some experiments and side-projects here {" "}
          <a
            href="https://github.com/hasanur-rahman079"
            rel="noreferrer"
            target="_blank"
            className="font-semibold hover:underline"
          >
            on my GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
