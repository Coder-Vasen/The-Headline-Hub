import { createContext, useReducer } from "react";

type Action = {
  type: "SET_NEWS";
  news?: NewsArticle[];
};

interface InitValue {
  news: NewsArticle[];
  setNews: (news: NewsArticle[]) => void;
}

const reducer = (state: NewsArticle[], action: Action) => {
  switch (action.type) {
    case "SET_NEWS":
      return action.news ?? [];
    default:
      return state;
  }
};
export const NewsContext = createContext<InitValue>({ news: [], setNews: () => {}});

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [news, dispatch] = useReducer(reducer, []);
  const value: InitValue = {
    news,
    setNews: (news: NewsArticle[]) => dispatch({ type: "SET_NEWS", news }),
  };
  return (
    <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
  );
};
