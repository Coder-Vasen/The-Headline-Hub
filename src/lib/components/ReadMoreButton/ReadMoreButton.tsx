"use client";


type Props = {
  article: NewsArticle;
};

function ReadMoreButton({ article }: Props) {
 

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article/article?${queryString}`;
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10
        rounded-b-lg dark:text-gray-900
         hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;