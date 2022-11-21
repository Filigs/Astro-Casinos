export default function FeaturedCrypto() {
  const assets = [
    {
      title: "BTC",
      price: 19409.08,
    },
    {
      title: "ETH",
      price: 2304.97,
    },
    {
      title: "BNB",
      price: 300.08,
    },
    {
      title: "DOGE",
      price: 0.0078,
    },
    {
      title: "AVAX",
      price: 10.81,
    },
    {
      title: "SOL",
      price: 60.17,
    },
  ];

  return (
    <p key={assets.title}>
      {assets.map(({ title, price }) => (
        <span className="font-normal">
          {" "}
          {title}: {price};{" "}
        </span>
      ))}
    </p>
  );
}
