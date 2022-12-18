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
      <li key={article.id} className="p-4 font-light">
        {article.title}
      </li>
    );
  });

  return (
    <section className="grid grid-cols-1 lg:flex lg:flex-row ">
      <div className="relative lg:basis-8/12">
        <Image
          src={SampleNew}
          alt="sample news image"
          className="lg:overflow-auto lg:max-w-full lg:h-auto rounded-lg p-4"
          fill={isBreakpoint ? false : true}
          // width={1920}
          // height={1080}
        />
      </div>
      <div className="lg:basis-4/12">
        {isBreakpoint ? (
          <></>
        ) : (
          <div className="font-semibold p-4 lg:text-2xl">{"Latest News"}</div>
        )}
        <ul className="grid grid-flow-row lg:grid-flow-row divide-y-2 divide-solid divide-slate-300 dark:divide-slate-700">
          {listItems}
        </ul>
      </div>
    </section>
  );
}
