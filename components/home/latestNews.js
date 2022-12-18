import Image from "next/image";
import sampleNew from "/public/sampleNew.png";
export default function LatestNews() {
  const iteration = [1, 2, 3];
  const listItems = iteration.map(() => {
    return (
      <div className="grid grid-cols-2 grid-flow-row-dense justify-center justify-items-center bg-bgContainer dark:bg-bgContainerDark rounded-lg py-2 px-4">
        <div className="block col-span-2">
          {/* banner */}
          <Image
            src={sampleNew}
            alt="sample banner"
            width={300}
            height={300}
            id="newsBanner"
          />
        </div>
        <div className="grid grid-flow-row-dense col-span-2 text-start ">
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
    );
  });

  return <div id="latestNewsGrid">{listItems}</div>;
}
