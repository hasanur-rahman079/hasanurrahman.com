import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";
import { SiGithub, SiResearchgate } from "react-icons/si";
import { ArrowIcon, ViewsIcon } from "@/components/icons";
import { about, avatar, bio, name } from "@/lib/info";
import { getBlogViews } from "@/lib/metrics";
import { getScholarStats } from "@/lib/scholar-stats";

export const revalidate = 10;

// Function to fetch GitHub contributions
async function getGitHubContributions() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hasanur-rahman079",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const data = await response.json();

    return data.public_repos || 0;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return 0;
  }
}

export default async function Home() {
  let views = 0;
  let githubContributions = 0;
  let scholarCitations = 0;

  try {
    const [blogViews, githubData, scholarStats] = await Promise.all([
      getBlogViews(),
      getGitHubContributions(),
      getScholarStats(),
    ]);
    views = blogViews ?? 0;
    githubContributions = githubData;
    scholarCitations = scholarStats.citations;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <section>
      <h1 className="font-bold font-serif text-3xl">{name}</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">{about()}</p>
      <div className="my-8 flex flex-col items-start md:flex-row md:items-center">
        <Image
          alt={`${name} - Professional Portrait`}
          className="rounded-full grayscale"
          placeholder="blur"
          priority
          src={avatar}
          width={100}
        />
        <div className="mt-8 ml-0 space-y-2 text-neutral-500 md:mt-0 md:ml-6 dark:text-neutral-400">
          <a
            className="flex items-center gap-2"
            href="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
            rel="noopener noreferrer"
            target="_blank"
            title="Google Scholar Profile - MD. Hasanur Rahman"
          >
            <RiDoubleQuotesL />
            {` ${scholarCitations.toLocaleString()} citations all time`}
          </a>

          <a
            className="flex items-center gap-2"
            href="https://www.researchgate.net/profile/Md-Rahman-262"
            rel="noopener noreferrer"
            target="_blank"
            title="ResearchGate Profile - Hasanur Rahman"
          >
            <SiResearchgate />
            {" 15,191 reads on researchgate"}
          </a>

          <a
            className="flex items-center gap-2"
            href="https://github.com/hasanur-rahman079"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Profile - Hasanur Rahman"
          >
            <SiGithub />
            {` ${githubContributions.toLocaleString()} public repos on GitHub`}
          </a>

          <Link className="flex items-center" href="/blog">
            <ViewsIcon />
            {`${views && views.toLocaleString()} blog views all time`}
          </Link>
        </div>
      </div>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">{bio()}</p>
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 font-sm text-neutral-500 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            href="https://twitter.com/hasanur069"
            rel="noopener noreferrer"
            target="_blank"
            title="Follow Hasanur Rahman on Twitter"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            href="mailto:hasanurrahman.bge@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Contact Hasanur Rahman via Email"
          >
            <ArrowIcon />
            <p className="h-7">send an email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            href="https://www.linkedin.com/in/hasanur069/"
            rel="noopener noreferrer"
            target="_blank"
            title="Connect with Hasanur Rahman on LinkedIn"
          >
            <ArrowIcon />
            <p className="h-7">connect on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            href="/cv_hasanur.pdf"
            rel="noopener noreferrer"
            target="_blank"
            title="Download Hasanur Rahman's CV"
          >
            <HiOutlineArrowDownTray />
            <p className="ml-1 h-7">download my cv</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
