import NewsFormBanner from "./form/banner";
import NewsFormContent from "./form/content";
import NewsFormTitle from "./form/title";
import NewsFormTags from "./form/tags";
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
    <div className="postNewsPage">
      <form id="newsForm">
        {/* inputs */}
        <div className="grid md:inputGroup">
          {/*  title */}
          <div className="inputDiv lg:grid">
            <NewsFormTitle />
          </div>
          {/* Content */}
          <div className="inputDiv">
            <NewsFormContent />
          </div>
          {/* Banner */}
          <div className="justify-center inputDiv">
            <NewsFormBanner />
          </div>
          {/* tags */}
          <div className="inputDiv">
            <NewsFormTags />
          </div>
        </div>
        {/* Form buttons */}
        <div className="flex justify-center w-full">
          <button type="button" id="previewForm">
            Preview
          </button>
          <button type="button" className=" text-cta" id="submitForm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
