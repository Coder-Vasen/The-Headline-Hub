import React from "react";
import ReadMoreButton from "@/components/ReadMoreButton/ReadMoreButton";
import NewsImagePlaceholder from "@/assets/NewsImagePlaceholder.png"
type Props = {
  article: NewsArticle;
};

function Article({ article }: Props) {
  return (
    <article
      className="bg-slate-100
     dark:bg-slate-800 flex flex-col 
     rounded-lg shadow-lg hover:scale-105 
     hover:shadow-xl hover:bg-slate-200 
     transition-all duration-200 ease-out"
    >
      { (
        <img
          src={article.urlToImage || NewsImagePlaceholder}
          alt={article.title}
          className="h-56 
    w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold dark:text-slate-100 font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs dark:text-slate-200 line-clamp-6">{article.description}</p>
          </section>
          <footer
            className="text-xs text-right 
          ml-auto flex space-x-1 pt-5 italic text-gray-400"
          >
            <p>{article.source.name} -</p>
            <p>{article.publishedAt}</p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;