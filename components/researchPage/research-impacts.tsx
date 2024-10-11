export default function ResearchImpacts({ totalPub }: any) {
  return (
    <div className="grid grid-cols-4 text-center divide-x bg-neutral-100 dark:bg-neutral-700 p-3 rounded">
      <div>
        <p className="text-2xl font-mono font-semibold">{totalPub}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          publications
        </p>
      </div>
      <div>
        <p className="text-2xl font-mono font-semibold">684</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          citations
        </p>
      </div>
      <div>
        <p className="text-2xl font-mono font-semibold">17</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          h-index
        </p>
      </div>
      <div>
        <p className="text-2xl font-mono font-semibold">19</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          i10-index
        </p>
      </div>
    </div>
  );
}
