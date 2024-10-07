
import React from "react";
import { format } from "date-fns";
import Balancer from "react-wrap-balancer";
import PubAuthors from "./authors";
import PubMetrics from "./publications-metrics";

export default function Publications({ work }) {
  return (
    <div className="mt-4 space-y-4">
      {work &&
        work.map((works, index) => {
          const pub = works["work-summary"][0];
          const pubDate = format(
            new Date(
              `${(pub["publication-date"] || {}).year?.value}-${
                (pub["publication-date"] || {}).month?.value
              }-01`
            ),
            "MMM, yyyy"
          );
          const ids = pub["external-ids"];
          const authors = pub["put-code"];

          return (
            <div
              key={index}
              className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded"
            >
              <div className="grid grid-cols-3 divide-x divide-neutral-300 dark:divide-neutral-600  text-center items-center mb-3 bg-neutral-200 dark:bg-neutral-700 rounded px-2 py-1 shadow-sm text-neutral-700 dark:text-neutral-300 text-sm">
                <p>
                  {pub.type.replace(/-/g, " ").charAt(0).toUpperCase() +
                    pub.type.replace(/-/g, " ").slice(1)}
                </p>

                <p>{(pub["journal-title"] || {}).value}</p>

                <time className="font-mono">{pubDate}</time>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 leading-6">
                  <Balancer ratio={0.0}> {pub.title.title.value}</Balancer>{" "}
                </h3>

                <PubAuthors pcode={authors} />
              </div>

              <div className="mt-4">
                {ids["external-id"] &&
                  ids["external-id"].map((doi, index) => {
                    if (doi["external-id-type"] === "doi") {
                      return (
                        <div key={index}>
                          <div>
                            <a
                              className="text-neutral-800 dark:text-neutral-200 underline"
                              href={`https://doi.org/${doi["external-id-value"]}`}
                              target="_blank"
                            >
                              Doi: {doi["external-id-value"]}
                            </a>

                            <PubMetrics doi={doi["external-id-value"]} />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
