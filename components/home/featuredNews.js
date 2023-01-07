import Image from "next/image";
import SampleNew from "/public/topNewsSample.png";
import { ViewportHook } from "../viewportHook";

const articles = [
  {
    id: 0,
    title: "Hot News Hashflare Owners Arrested Over $575 Million Fraud",
  },
  {
    id: 1,
    title: "FTX Was Under Investigation by Federal Prosecutors",
  },
  {
    id: 2,
    title: 'Chipmixer Accused of Being "United States Government Honeypot"',
  },
  {
    id: 3,
    title: "Prager Metis Hit With FTX-related Lawsuit",
  },
  {
    id: 4,
    title: "Second FTX Lawsuit Targets SBF, Caroline, Golden State Warriors",
  },
  {
    id: 5,
    title: "ApeCoin Community Launches Yuga Labs Marketplace",
  },
];

export default function TopCryptoNews() {
  const isBreakpoint = ViewportHook(1050);
  const listItems = articles.map((article) => {
    return (
      <li
        key={article.id}
        className="px-2 py-2 font-normal border-t-0 border-b border-b-stone-300 last:border-b-0 "
      >
        {article.title}
      </li>
    );
  });

  return (
    <section className="grid grid-cols-1 p-0 lg:grid lg:grid-cols-3">
      <div className="relative lg:col-span-2 rounded-xl">
        <Image
          src={SampleNew}
          alt="sample news image"
          className="drop-shadow-md lg:scale-105 lg:-translate-x-1 rounded-xl lg:overflow-auto lg:max-w-full lg:h-auto"
          fill={isBreakpoint ? false : true}
          // width={1920}
          // height={1080}
        />
      </div>
      <div className=" rounded-xl">
        <ul className="grid grid-flow-row px-2 py-4 lg:grid-flow-row">
          <span className="px-2 pb-4 font-black lg:text-2xl text-cta">
            {"Latest News"}
          </span>
          {listItems}
        </ul>
      </div>
    </section>
  );
}
