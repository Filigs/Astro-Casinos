const links = [
  {
    id: 0,
    title: "Latest News",
  },
  {
    id: 1,
    title: "Analysis",
  },
  {
    id: 2,
    title: "Guides",
  },
  {
    id: 3,
    title: "Interviews",
  },
  {
    id: 4,
    title: "Podcast",
  },
  {
    id: 5,
    title: "Reviews",
  },
  {
    id: 6,
    title: "Games",
  },
];

export default function NavLinks() {
  return (
    <section
      key={links.id}
      className="flex space-x-12 justify-center w-full overflow-hidden whitespace-nowrap text-justify align-middle p-4 transition-all text-dark mx-4"
    >
      {links.map(({ title }) => (
        <ul key={title}>
          <li className="font-light text-sm">{title}</li>
        </ul>
      ))}
    </section>
  );
}
