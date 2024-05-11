import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import "./App.css";
import RootLayout from "@/components/Layout/Layout";
import NewsList from "@/components/NewsList/NewsList";
import Loading from "@/components/Loading/Loading";
import ErrorPage from "@/components/pages/Error/ErrorPage";
import { NewsContext } from "@/context/NewsContext";
import { NewsFilterContext } from "@/context/NewsFilterContext";
function App() {
  const { setNews } = useContext(NewsContext);
  const { news, setNews: setFilterNews } = useContext(NewsFilterContext);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setError] = useState("");
  const fetchNews = async () => {
    // Setting loading to true initially
    setLoading(true);
    const url = "https://newsapi.org/v2/top-headlines?country=in";

    try {
      
      const response = await axios.get(url, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
        timeout: 3000,
      });
      const topHeadlines = response.data;
      console.log(topHeadlines);
      if (topHeadlines.status === "error") {
        setError(topHeadlines.message);
      } else {
        setNews(topHeadlines.articles);
        setFilterNews(topHeadlines.articles);
      }
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.code === "ECONNABORTED") {
          setError("Request timed out, please try again later.");
        }
        if (error.message === "Network Error") {
          setError("Failed to fetch, please check your internet connection");
        }
        if (error.code === "ERR_BAD_REQUEST")
          setError(error.response?.data.message || "Check your API key");
        setNews([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <RootLayout>
        {isLoading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorPage message={errorMessage} />
        ) : (
          <NewsList news={news} />
        )}
      </RootLayout>
    </>
  );
}

export default App;
