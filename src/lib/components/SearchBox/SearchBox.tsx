// "use client";
// import { useRouter } from "next/navigation";
import { NewsContext } from "@/context/NewsContext";
import { NewsFilterContext } from "@/context/NewsFilterContext";
import { FormEvent, useContext, useEffect, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const { filterNews, setNews } = useContext(NewsFilterContext);
  const {news} = useContext(NewsContext);

  useEffect(() => {
    if(input){
      filterNews(input);
    }else{
      setNews(news);
    }
  }, [input]);

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
      }}
      className="max-w-6xl 
    mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-14 
        rounded-sm placeholder-gray-500 
        text-gray-500 outline-none flex-1 bg-transparent dark:placeholder:text-slate-200
         dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
