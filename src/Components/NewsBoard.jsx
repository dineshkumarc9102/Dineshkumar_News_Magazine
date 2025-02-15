import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=beec4a290f994ff0ba6fea7c4733bc59`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className='text-center '>Latest <span className='badge bg-danger'>News</span></h2>
      {error ? <p className="text-center text-danger">{error}</p> : null}
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};
