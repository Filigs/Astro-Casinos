import Image from "next/image";
import sampleNew from "/public/sampleNew.png";
export default function LatestNews() {
  const iteration = [1, 2, 3];
  const listItems = iteration.map((item) => {
    return (
      <div
        className="grid grid-cols-2 bg-bgSecondary dark:bg-bgSecondaryDark rounded-xl "
        id="latestNewsCard"
        key={item}
      >
        <div className="block h-full col-span-2">
          {/* banner */}
          <Image src={sampleNew} alt="sample banner" />
        </div>
        <div className="block col-span-2 p-4 text-justify justify-items-start">
          <div className="text-lg font-bold lg:text-xl">
            {/* Title */}
            {"Here be the shiba"}
          </div>
          <div className="font-light">
            {/* Category */} {"Proof of Work"}
          </div>
        </div>
        <div className="block pb-2 pl-4 font-light text-start">
          {/* Author */} {"By Ben Dover"}
        </div>
        <div className="block pb-2 pr-4 font-light text-end text-slate-500 dark:text-slate-500">
          {/* X days ago */} {"1 day ago"}
        </div>
      </div>
    );
  });

  return <div id="latestNewsGrid">{listItems}</div>;
}
