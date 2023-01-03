export default function NewsFormContent() {
  return (
    <>
      <label htmlFor="newsBody" alt="Label for the news body input">
        {"Corpo da Noticia"}
      </label>
      <textarea
        id="newsBody"
        rows="10"
        placeholder="Bitcoin has been up lately, and..."
      />
    </>
  );
}
