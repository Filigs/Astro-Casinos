export default function PostNews() {
  return (
    <section>
      <div>
        <form>
          <div className="grid grid-flow-row-dense gap-y-6 lg:gap-y-10">
            <div className="flex gap-2">
              <label for="newsTitle" alt="Label for the news title input">
                Titulo da Noticia
              </label>
              <input
                type="text"
                id="newsTitle"
                placeholder="Titulo da noticia"
              />
            </div>
            <div className="space-y-2">
              <label for="newsBody" alt="Label for the news body input">
                Corpo da Noticia
              </label>
              <textarea id="newsBody" rows="20" placeholder="Corpo do post" />
            </div>
            <div className="flex flex-row-reverse">
              <button type="button" className="bg-cta">
                Preview
              </button>
              <button type="button" className="bg-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
