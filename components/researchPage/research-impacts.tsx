const BAR_MAX_HEIGHT_PX = 72;

type CitationGraphEntry = { year: number; citations: number };

type Props = {
  totalPub: number;
  citations: number;
  hIndex: number;
  i10Index: number;
  citationsGraph: CitationGraphEntry[];
};

export default function ResearchImpacts({
  totalPub,
  citations,
  hIndex,
  i10Index,
  citationsGraph,
}: Props) {
  const maxCitations = Math.max(...citationsGraph.map((g) => g.citations), 1);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 divide-x rounded bg-neutral-100 p-3 text-center dark:bg-neutral-700">
        <div>
          <p className="font-mono font-semibold text-2xl">{totalPub}</p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            publications
          </p>
        </div>
        <div>
          <p className="font-mono font-semibold text-2xl">
            {citations.toLocaleString()}
          </p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            citations
          </p>
        </div>
        <div>
          <p className="font-mono font-semibold text-2xl">{hIndex}</p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            h-index
          </p>
        </div>
        <div>
          <p className="font-mono font-semibold text-2xl">{i10Index}</p>
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            i10-index
          </p>
        </div>
      </div>

      {citationsGraph.length > 0 && (
        <div className="rounded bg-neutral-100 p-4 dark:bg-neutral-700">
          <p className="mb-3 font-medium text-neutral-500 text-xs dark:text-neutral-400">
            Citations per year
          </p>
          <div className="flex items-end gap-1.5" style={{ height: "80px" }}>
            {citationsGraph.map((entry) => (
              <div
                className="group relative flex flex-1 flex-col items-center"
                key={entry.year}
              >
                <div
                  className="w-full rounded-sm bg-neutral-400 transition-colors group-hover:bg-neutral-600 dark:bg-neutral-500 dark:group-hover:bg-neutral-300"
                  style={{
                    height: `${(entry.citations / maxCitations) * BAR_MAX_HEIGHT_PX}px`,
                    minHeight: "4px",
                  }}
                />
                <span className="mt-1 text-[10px] text-neutral-500 dark:text-neutral-400">
                  {entry.year}
                </span>
                <span className="-top-6 -translate-x-1/2 pointer-events-none absolute left-1/2 rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-white opacity-0 group-hover:opacity-100 dark:bg-neutral-200 dark:text-neutral-900">
                  {entry.citations}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
