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
  const isBreakpoint = ViewportHook(850);
  const listItems = articles.map((article) => {
    return (
      <li key={article.id} className="p-4">
        {article.title}
      </li>
    );
  });

  return (
    <div className="grid grid-flow-row lg:flex lg:flex-row items-center p-4 duration-150 ">
      <section className="lg:basis-3/4">
        <Image src={SampleNew} alt="sample news image" />
      </section>
      <section className="lg:basis-1/4">
        {isBreakpoint ? (
          <></>
        ) : (
          <div className="font-semibold">{"Latest News"}</div>
        )}
        <ul className="grid grid-flow-row lg:grid-flow-row divide-y-2 divide-solid divide-gray-300">
          {listItems}
        </ul>
      </section>
    </div>
  );
}
