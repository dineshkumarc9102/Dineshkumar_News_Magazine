import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import axios from 'axios';

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=beec4a290f994ff0ba6fea7c4733bc59`;
  
    axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      }
    })
    .then(response => {
      if (response.data.articles) {
        setArticles(response.data.articles);
      } else {
        setError("Invalid API response");
      }
    })
    .catch(error => {
      console.error("Error fetching news:", error);
      setError(error.message || 'Error fetching news');
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
