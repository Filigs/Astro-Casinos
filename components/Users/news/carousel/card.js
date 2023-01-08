import Image from "next/image";
import sampleNew from "/public/sampleNew.png";
import Link from "next/link";

export default function NewsCarouselCard() {
  return (
    <div id="newsCarouselCard">
      <div className="block lg:scale-110 lg:translate-x-2 drop-shadow-sm">
        {/* banner */}
        <Link href="/">
          <Image src={sampleNew} alt="sample banner" />
        </Link>
      </div>
      <div className="self-start block px-2 py-4 font-semibold tracking-normal text-center lg:tracking-wide lg:px-4 lg:py-6 lg:text-end">
        {"Deposit now 100% Blabla"}
      </div>
    </div>
  );
}
