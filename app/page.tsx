import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ViewsIcon } from "@/components/icons";
import { SiResearchgate, SiGithub } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { name, about, bio, avatar } from "@/lib/info";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { getBlogViews } from "@/lib/metrics";

export const revalidate = 10;

// Function to fetch GitHub contributions
async function getGitHubContributions() {
  try {
    const response = await fetch('https://api.github.com/users/hasanur-rahman079', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }
    
    const data = await response.json();

    return data.public_repos || 0;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return 0;
  }
}

export default async function Home() {
  let views = 0;
  let githubContributions = 0;

  try {
    const [blogViews, githubData] = await Promise.all([
      getBlogViews(),
      getGitHubContributions()
    ]);
    views = blogViews ?? 0;
    githubContributions = githubData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={`${name} - Professional Portrait`}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
            className="flex items-center gap-2"
            title="Google Scholar Profile - MD. Hasanur Rahman"
          >
            <RiDoubleQuotesL />
            {` 1002 citations all time`}
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.researchgate.net/profile/Md-Rahman-262"
            className="flex items-center gap-2"
            title="ResearchGate Profile - Hasanur Rahman"
          >
            <SiResearchgate />
            {` 15,191 reads on researchgate`}
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hasanur-rahman079"
            className="flex items-center gap-2"
            title="GitHub Profile - Hasanur Rahman"
          >
            <SiGithub />
            {` ${githubContributions.toLocaleString()} repositories on GitHub`}
          </a>

          <Link href="/blog" className="flex items-center">
            <ViewsIcon />
            {`${views && views.toLocaleString()} blog views all time`}
          </Link>
        </div>
      </div>

      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/hasanur069"
            title="Follow Hasanur Rahman on Twitter"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:hasanurrahman.bge@gmail.com"
            title="Contact Hasanur Rahman via Email"
          >
            <ArrowIcon />
            <p className="h-7">send an email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hasanur069/"
            title="Connect with Hasanur Rahman on LinkedIn"
          >
            <ArrowIcon />
            <p className="h-7">connect on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="/cv_hasanur.pdf"
            title="Download Hasanur Rahman's CV"
          >
            <HiOutlineArrowDownTray />
            <p className="h-7 ml-1">download my cv</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
