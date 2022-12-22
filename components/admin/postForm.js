import InputNewsBanner from "./form/banner";

export default function PostNews() {
  return (
    <section>
      <div>
        <form id="admin">
          <div className="lg:pb-10 lg:grid lg:grid-flow-row-dense">
            <div className="text-center lg:grid lg:pb-10">
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
          <div>
            <InputNewsBanner />
          </div>
          <div className="flex flex-row-reverse w-full justify-evenly lg:justify-start">
            <button type="button" className="border-cta text-cta dark:bg-cta">
              Submit
            </button>
            <button type="button">Preview</button>
          </div>
        </form>
      </div>
    </section>
  );
}
