import styles from "/styles/nav.module.css";
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
    <section
      key={assets.id}
      className={
        "flex space-x-6 justify-center w-full overflow-hidden whitespace-nowrap text-justify align-middle p-4 transition-all text-dark mx-4"
      }
    >
      {assets.map(({ title, price, percentage }) => (
        <ul
          className={
            styles.cryptoSlide +
            " list-disc md:list-none text-xs md:animate-none"
          }
        >
          <li>
            <span className="font-medium list-disc">{title}</span>
            <span className="font-normal text-gray-400">{" 24h"}</span>:{" "}
            <span className="font-medium"> </span>
            <span className="font-medium">
              {percentage > 0 ? (
                <span className="text-cta">
                  {"$" + price + " (" + percentage + "%" + ")"}
                </span>
              ) : (
                <span className="text-success">
                  {"$" + price + " (" + percentage + "%" + ")"}
                </span>
              )}
            </span>
          </li>
        </ul>
      ))}
    </section>
  );
}
