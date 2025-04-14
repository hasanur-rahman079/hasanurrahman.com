import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ViewsIcon } from "@/components/icons";
import { SiResearchgate } from "react-icons/si";
import { RiDoubleQuotesL } from "react-icons/ri";
import { name, about, bio, avatar } from "@/lib/info";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { getBlogViews } from "@/lib/metrics";

export const revalidate = 10;

export default async function Home() {
  let views = 0;

  try {
    const blogViews = await getBlogViews();
    views = blogViews ?? 0; // Set views to 0 if blogViews is undefined or null
  } catch (error) {
    console.error("Error fetching views:", error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
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
          >
            <RiDoubleQuotesL />
            {` 877 citations all time`}
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.researchgate.net/profile/Md-Rahman-262"
            className="flex items-center gap-2"
          >
            <SiResearchgate />
            {` 15,191 reads on researchgate`}
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
          >
            <HiOutlineArrowDownTray />
            <p className="h-7 ml-1">download my cv</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
