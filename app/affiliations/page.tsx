import experiencesData from "lib/dataExperience";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliations",
  description:
    "Here's what experiences i have gained from different institutions",
};

async function expData() {
  return experiencesData;
}

function ExpCard({
  id,
  title,
  institute,
  location,
  weblink,
  time,
  focus,
}: any) {
  return (
    <div id={id} className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded">
      <h4 className="mt-0">{title}</h4>
      <h5>
        <Link
          href={weblink}
          target="_blank"
          className="no-underline hover:underline transition duration-300 leading-tight"
        >
          {institute}
        </Link>
      </h5>
      <p className="my-0 text-sm">{location}</p>
      <p className="my-2 text-sm">{time}</p>
      <p className="my-0 text-sm">Responsibilities: {focus}</p>
    </div>
  );
}

export default async function Affiliations() {
  const data = await expData();

  const sortedResearch = data.research.sort((a: any, b: any) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  const sortedOrganizations = data.organizations.sort((a: any, b: any) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Affiliations</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what experiences i have gained from different institutions
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Research Affiliations</h3>
        <div className="space-y-4">
          {sortedResearch.map((obj: any) => (
            <ExpCard
              key={obj.id}
              id={obj.id}
              title={obj.title}
              institute={obj.institute}
              location={obj.address}
              weblink={obj.weblink}
              time={obj.time}
              focus={obj.focus}
            />
          ))}
        </div>

        <h3 id="computer-office">Organization Affiliations</h3>
        <div className="space-y-4">
          {sortedOrganizations.map((obj: any) => (
            <ExpCard
              key={obj.id}
              id={obj.id}
              title={obj.title}
              institute={obj.institute}
              location={obj.address}
              weblink={obj.weblink}
              time={obj.time}
              focus={obj.focus}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
