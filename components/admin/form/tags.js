export default function NewsFormTags() {
  return (
    <>
      <label htmlFor="newsTags" alt="Label for the news tags input">
        {"Search tags"}
      </label>
      <textarea
        id="newsTags"
        rows="2"
        placeholder="bitcoin, ethereum, btc, eth, ..."
      ></textarea>
    </>
  );
}
