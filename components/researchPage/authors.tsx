"use client";

import React from "react";
import { fetchAuthorsAPI } from "@/lib/orcidApi";

interface Contributor {
  work: {
    contributors: {
      contributor: {
        "credit-name": {
          value: string;
        };
      }[];
    };
  };
}

interface PubAuthorsProps {
  pcode: string;
}

export default function PubAuthors({ pcode }: PubAuthorsProps) {
  const [contributors, setContributors] = React.useState<Contributor[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getContributors() {
      const data = await fetchAuthorsAPI(
        `https://pub.orcid.org/v3.0/0000-0001-9238-3149/works/${pcode}`
      );

      setContributors(data?.bulk || []);
      setLoading(false);
    }

    getContributors();
  }, [pcode]);

  return (
    <>
      {loading ? (
        <div className="text-neutral-500 dark:text-neutral-400 pt-2">
          Loading authors...
        </div>
      ) : (
        contributors.length > 0 &&
        contributors.map((pcodes, index) => {
          const list = pcodes.work.contributors;
          const name = list.contributor;

          return (
            <div
              className="mt-3 mb-2 flex flex-wrap gap-x-2 text-neutral-700 dark:text-neutral-300"
              key={index}
            >
              {name &&
                name.map((names, index) => {
                  const nameList = names["credit-name"];
                  //   console.log(nameList.value);

                  return (
                    <div className="block" key={index}>
                      <div
                        className={` ${
                          nameList.value === "MD. Hasanur Rahman" ||
                          nameList.value === "Md. Hasanur Rahman"
                            ? "font-bold"
                            : ""
                        }`}
                      >
                        {nameList.value}
                        {index !== name.length - 1 ? ", " : " "}
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })
      )}
    </>
  );
}
