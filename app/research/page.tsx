import { getPublicationsFromOrcid } from "lib/orcidApi";
import type { Metadata } from "next";
import { BsArrowUpRight, BsInfoCircle } from "react-icons/bs";
import Publications from "@/components/researchPage/all-publications";
import ResearchImpacts from "@/components/researchPage/research-impacts";
import { getScholarStats } from "@/lib/scholar-stats";
import { pageMetadata } from "@/lib/site";

export const revalidate = 86_400;

export const metadata: Metadata = pageMetadata({
  title: "Research",
  description:
    "Peer-reviewed publications and citation metrics of MD. Hasanur Rahman in bioinformatics, cancer genomics and computational drug discovery.",
  path: "/research",
});

export default async function ResearchPage() {
  const [allPub, scholarStats] = await Promise.all([
    getPublicationsFromOrcid("works"),
    getScholarStats(),
  ]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1 pb-3 text-neutral-400 text-sm italic">
        <BsInfoCircle />
        All data are fetching from my
        <a
          href="https://orcid.org/0000-0001-9238-3149"
          rel="noopener"
          target="_blank"
        >
          <span className="flex items-center font-semibold">
            orcid
            <BsArrowUpRight />
          </span>
        </a>
        ,
        <a
          href="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
          rel="noopener"
          target="_blank"
        >
          <span className="flex items-center font-semibold">
            google scholar
            <BsArrowUpRight />
          </span>
        </a>
        and
        <a
          href="https://www.researchgate.net/profile/Md-Rahman-262"
          rel="noopener"
          target="_blank"
        >
          <span className="flex items-center font-semibold">
            researchGate
            <BsArrowUpRight />
          </span>
        </a>
        account.
      </div>
      <ResearchImpacts
        citations={scholarStats.citations}
        citationsGraph={scholarStats.citations_graph}
        hIndex={scholarStats.h_index}
        i10Index={scholarStats.i10_index}
        totalPub={allPub.length}
      />
      <Publications work={allPub} />
    </div>
  );
}
