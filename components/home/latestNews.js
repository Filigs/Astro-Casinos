import Image from "next/image";
import sampleNew from "/public/sampleNew.png";
export default function LatestNews() {
  const iteration = [1, 2, 3];
  const listItems = iteration.map((item) => {
    return (
      <div
        className="grid grid-cols-2 bg-bgSecondary dark:bg-bgSecondaryDark rounded-lg py-1.5 lg:py-3 px-3 lg:px-6 mx-auto"
        id="latestNewsCard"
        key={item}
      >
        <div className="block col-span-2 py-2 mx-auto ">
          {/* banner */}
          <Image src={sampleNew} alt="sample banner" width={300} height={300} />
        </div>
        <div className="block col-span-2 justify-items-start text-justify py-2">
          <div className="text-lg lg:text-xl font-bold">
            {/* Title */}
            {"Here be the shiba"}
          </div>
          <div className="font-light">
            {/* Category */} {"Proof of Work"}
          </div>
        </div>

        <div className="block text-start font-light py-2">
          {/* Author */} {"By Ben Dover"}
        </div>
        <div className="block text-end py-2 font-light text-slate-500 dark:text-slate-500">
          {/* X days ago */} {"1 day ago"}
        </div>
      </div>
    );
  });

  return <div id="latestNewsGrid">{listItems}</div>;
}
