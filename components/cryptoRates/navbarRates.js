import styles from "styles/nav.module.css";

export default function Coins() {
  async function dataFetch() {
    const res = fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
    );

    const data = res.json();
    return data;
  }
  /* {"$" + price + " (" + percentage + "%" + ")"} */
  return (
    <div className="p-4">
      <ul
        className={
          styles.cryptoSlideLeft +
          " list-disc md:list-none text-xs lg:animate-none flex place-content-between gap-4"
        }
      >
        <li className="flex">
          <span className="font-normal text-success">
            {" 24h: " + { dataFetch }}
          </span>
        </li>
      </ul>
    </div>
  );
}
