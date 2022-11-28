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
  return (
    <div className="grid grid-flow-row md:grid-flow-col items-center p-4 duration-150 ">
      <section className="basis-2/3 p-1">
        <Image src={SampleNew} className="" />
      </section>
      <section className="basis-1/4">
        {isBreakpoint ? (
          <></>
        ) : (
          <div className="font-semibold">{"Hot News"}</div>
        )}

        {articles.map((article) => {
          return (
            <ul
              key={article.id}
              className="grid grid-flow-col lg:grid-flow-row divide-y-8 divide-solid divide-gray-300"
            >
              <li className=" p-4">{article.title}</li>
            </ul>
          );
        })}
      </section>
    </div>
  );
}
