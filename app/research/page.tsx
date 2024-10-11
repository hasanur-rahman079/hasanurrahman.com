import { getPublicationsFromOrcid } from "lib/orcidApi";
import { Metadata } from "next";
import { BsArrowUpRight, BsInfoCircle } from "react-icons/bs";
import Publications from "@/components/researchPage/all-publications";
import ResearchImpacts from "@/components/researchPage/research-impacts";

export const metadata: Metadata = {
  title: "Research",
  description: "Here's what research I've published so far",
};

export default async function ResearchPage() {
  const allPub = await getPublicationsFromOrcid("works");

  return (
    <div>
      <div className="flex flex-wrap text-sm italic items-center gap-1 pb-3 text-neutral-400">
        <BsInfoCircle />
        All data are fetching from my
        <a href="https://orcid.org/0000-0001-9238-3149" target="_blank">
          <span className="flex items-center font-semibold">
            orcid
            <BsArrowUpRight />
          </span>
        </a>
        ,
        <a
          href="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
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
          target="_blank"
        >
          <span className="flex items-center font-semibold">
            researchGate
            <BsArrowUpRight />
          </span>
        </a>
        account.
      </div>
      <ResearchImpacts totalPub={allPub.length} />
      <Publications work={allPub} />
    </div>
  );
}
