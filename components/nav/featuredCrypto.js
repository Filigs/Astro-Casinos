import Image from "next/image";
import GeckoLogo from "public/coingecko_logo.png";
import Coins from "../cryptoRates/navbarRates";
const assets = [
  {
    id: 0,
    title: "BTC",
    price: 19409.08,
    percentage: -9,
  },
  {
    id: 1,
    title: "ETH",
    price: 2304.97,
    percentage: -7.1,
  },
  {
    id: 2,
    title: "BNB",
    price: 300.08,
    percentage: -12,
  },
  {
    id: 3,
    title: "DOGE",
    price: 0.0078,
    percentage: 24,
  },
  {
    id: 4,
    title: "AVAX",
    price: 10.81,
    percentage: 1.24,
  },
  {
    id: 5,
    title: "SOL",
    price: 60.17,
    percentage: 5.87,
  },
];

export default function FeaturedCrypto() {
  return (
    <div className="block mx-8">
      <section
        className={
          "grid-flow-col overflow-hidden whitespace-nowrap text-justify align-middle md:transition-all text-dark mx-4"
        }
      >
        <Coins />
      </section>
      <section className="justify-center">
        <p className="flex justify-center font-extralight items-center">
          <span className="m-4">
            <Image
              src={GeckoLogo}
              alt={"logo"}
              className="w-5 h-5"
              aria-hidden="true"
              viewBox="0 0 24 24"
              // className={"text-center"}
            />
          </span>
          <span className="m-4"> {"Data provided by CoinGecko"}</span>
        </p>
      </section>
    </div>
  );
}
