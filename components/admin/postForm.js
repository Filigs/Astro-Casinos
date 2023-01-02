import InputNewsBanner from "./form/banner";
/* 

fazer slug do link
 
permitir outros autores com conta criada fazerem login e postar
 

# Inputs

Tags/Labels do Post (string) e.g: "one, two, three"
 
Titulo (string) e.g: "Hello World"
 
Banner (file) e.g: "Choose file" button
 
Content (string) e.g: "Hello world.
                      Bye world."
 
## SEO meta tag content ( & ) [Titulo, Content[<x palavras]]

title tag (string) - Fetch Titulo

meta description (string) e.g: "Hello world. Bye world"(no paragraph)
*/

export default function PostNews() {
  return (
    <section>
      <form id="admin">
        <div className="grid gap-y-4 lg:gap-8 lg:py-10 lg:grid lg:grid-flow-row-dense">
          {/*  title */}
          <div className="text-center lg:grid lg:pb-10">
            <label htmlFor="newsTitle" alt="Label for the news title input">
              Titulo da Noticia
            </label>
            <input type="text" id="newsTitle" placeholder="Titulo da noticia" />
          </div>
          {/* Content */}
          <div className="pb-10 text-center">
            <label htmlFor="newsBody" alt="Label for the news body input">
              Corpo da Noticia
            </label>
            <textarea id="newsBody" rows="20" placeholder="Corpo do post" />
          </div>
          {/* Banner */}
          <div>
            <InputNewsBanner />
          </div>
          {/* Form buttons */}
          <div className="flex flex-row-reverse w-full justify-evenly lg:justify-start lg:mt-4">
            <button type="button" className=" text-cta">
              Submit
            </button>
            <button type="button">Preview</button>
          </div>
        </div>
      </form>
    </section>
  );
}
