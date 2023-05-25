import experiencesData from "lib/dataExperience";
import type { Metadata } from "next";
import Link from "next/link";
const moment = require("moment");

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
      <h5 className="leading-6 mb-1">
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

  // const sortedResearch = data.research.sort((a: any, b: any) => {
  //   return (
  //     new Date(Date.parse(a.time)).getTime() -
  //     new Date(Date.parse(b.time)).getTime()
  //   );
  // });

  const sortedResearch = data.research.sort((a: any, b: any) => {
    const endDateA = moment(a.time.split(" – ")[1], "D MMM YYYY").toDate();
    const endDateB = moment(b.time.split(" – ")[1], "D MMM YYYY").toDate();
    return endDateB.getTime() - endDateA.getTime();
  });

  // const sortedOrganizations = data.organizations.sort((a: any, b: any) => {
  //   return new Date(b.time).getTime() - new Date(a.time).getTime();
  // });

  const sortedOrganizations = data.organizations.sort((a: any, b: any) => {
    const endDateA = moment(a.time.split(" – ")[1], "D MMM YYYY").toDate();
    const endDateB = moment(b.time.split(" – ")[1], "D MMM YYYY").toDate();
    return endDateB.getTime() - endDateA.getTime();
  });

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Affiliations</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what experiences i have gained from different institutions
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Research Employment</h3>
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

        <h3 id="computer-office">Organizational Service</h3>
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
