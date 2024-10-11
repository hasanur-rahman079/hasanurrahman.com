import Script from "next/script";

export default function PubMetrics({ doi }: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://cdn.plu.mx/widget-popup.js"
        crossOrigin="anonymous"
      />
      <Script
        type="text/javascript"
        src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
      />
      <Script async src="https://badge.dimensions.ai/badge.js" />

      <div className="flex items-center space-x-4 mt-4">
        {/* Dimention Badge */}
        <>
          <span
            className="__dimensions_badge_embed__"
            data-doi={doi}
            data-style="large_rectangle"
            data-legend="hover-right"
          ></span>
        </>

        {/* Altmetric */}
        <>
          <div
            data-badge-popover="bottom"
            data-badge-type="1"
            data-doi={doi}
            data-condensed="true"
            data-hide-no-mentions="true"
            className="altmetric-embed"
          ></div>
        </>

        {/* Pulmx */}
        <>
          <a
            href={`https://plu.mx/plum/a/?doi=${doi}`}
            className="plumx-plum-print-popup plum-liberty-theme"
            data-size="medium"
            data-popup="left"
            data-hide-when-empty="true"
            target="__blank"
          ></a>
        </>
      </div>
    </>
  );
}
