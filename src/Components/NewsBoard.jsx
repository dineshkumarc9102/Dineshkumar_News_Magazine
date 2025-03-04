import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=beec4a290f994ff0ba6fea7c4733bc59`;

    fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json',
        'Connection': 'keep-alive',
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error("Invalid API response");
        }
      })
      .catch(err => {
        console.error("Error fetching news:", err);
        setError(err.message);
      });
  }, [category]);

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
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
