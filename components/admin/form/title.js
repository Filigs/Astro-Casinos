export default function NewsFormTitle() {
  return (
    <>
      <label htmlFor="newsTitle" alt="Label for the news title input">
        Titulo da Noticia
      </label>
      <input
        type="text"
        id="newsTitle"
        placeholder="Bitcoin up 100% and here's why"
      />
    </>
  );
}
