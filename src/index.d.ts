type Article = {
    category: string;
    country: string;
    author: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
  };

type ApiSuccessResponse = {
  status: "ok";
  totalResults: number;
  articles: NewsArticle[];
}

type ApiErrorResponse = {
  status: "error";
  code: string;
  message: string;
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

type NewsArticle = {
  source : {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
  
  type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
  };
  
  type NewsResponse = {
    pagination: Pagination;
    data: Article[];
  };
  
  type Category =
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";