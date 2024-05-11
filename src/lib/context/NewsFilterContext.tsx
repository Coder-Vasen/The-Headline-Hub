import React, { createContext, useContext, useReducer } from "react";
import { NewsContext } from "./NewsContext";

type NewsAction = {
  type: "NEWS_FILTER" | "SET_NEWS";
  keyword?: string;
  news?: NewsArticle[];
};

interface InitValue {
    news: NewsArticle[];
    filterNews: (keyword?: string) => void;
    setNews: (news: NewsArticle[]) => void;
}

export const NewsFilterContext = createContext<InitValue>({news: [], filterNews: () => {}, setNews: () => {}});

const reducer = (state: NewsArticle[], action: NewsAction) => {
  switch (action.type) {
    case "NEWS_FILTER":

        if (action.keyword && action.keyword.length > 0){
            return state.filter((article) => article.title.toLowerCase().includes(action.keyword!.toLowerCase()))
        }else {
          return state;
        }
    case "SET_NEWS":

        if (action.news){
          
          return action.news
        }
        return state;
    default:
      return state;
  }
};

export const NewsFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const {news: initialState} = useContext(NewsContext);
  const [news, dispatch] = useReducer(reducer, initialState);

  const value = {
    news,
    filterNews: (keyword?: string) => dispatch({ type: "NEWS_FILTER", keyword: keyword ?? "" }),
    setNews: (news: NewsArticle[]) => {
  
      dispatch({ type: "SET_NEWS", news })
    },
  }

  return (
    <NewsFilterContext.Provider value={value}>
      {children}
    </NewsFilterContext.Provider>
  );
};

// export const useNewsContext = () => useContext(NewsContext);
