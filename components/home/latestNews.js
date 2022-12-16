import Image from "next/image";

export default function LatestNews() {
  return (
    <section>
      <div className="grid grid-cols-2 grid-flow-row-dense justify-center justify-items-center">
        <div className="block col-span-1">{/* banner */}</div>
        <div className="grid grid-flow-row-dense col-span-1 text-start">
          <div>
            {/* Title */}
            {"Here be the shiba"}
          </div>
          <div>
            {/* Category */} {"Proof of Work"}
          </div>
        </div>
        <div className="inline">
          <div className="justify-start">
            {/* Author */} {"By Ben Dover"}
          </div>
          <div className="justify-end">
            {/* X days ago */} {"1 day ago"}
          </div>
        </div>
      </div>
    </section>
  );
}
