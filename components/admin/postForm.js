export default function PostNews() {
  return (
    <section>
      <div>
        <form>
          <div className="lg:grid lg:grid-flow-row-dense pb-10">
            <div className="grid pb-10 text-center">
              <label htmlFor="newsTitle" alt="Label for the news title input">
                Titulo da Noticia
              </label>
              <input
                type="text"
                id="newsTitle"
                placeholder="Titulo da noticia"
              />
            </div>
            <div className="pb-10 text-center">
              <label htmlFor="newsBody" alt="Label for the news body input">
                Corpo da Noticia
              </label>
              <textarea id="newsBody" rows="20" placeholder="Corpo do post" />
            </div>
          </div>
          <div className="flex flex-row-reverse w-full justify-evenly lg:justify-start pb-10">
            <button type="button" className="bg-success">
              Submit
            </button>
            <button type="button" className="bg-cta">
              Preview
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
