import Image from "next/image";
import sampleNew from "/public/sampleNew.png";

export const NewsCardCarousel = (
  <div id="newsCardCarousel">
    <div className="block overflow-visible">
      {/* banner */}
      <Image src={sampleNew} alt="sample banner" width={300} height={300} />
    </div>
    <div className="self-start block p-4 text-end">
      {"Deposit now 100% Blabla"}
    </div>
  </div>
);
