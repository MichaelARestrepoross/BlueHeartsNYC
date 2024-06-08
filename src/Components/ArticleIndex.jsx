// ArticleIndex.js
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const TopBaseStoriesURL = import.meta.env.VITE_TOPSTORIES_BASE_URL;
const NYTimesAPI_KEY = import.meta.env.VITE_TIMES_API_KEY;

function ArticleIndex({topic}) {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${TopBaseStoriesURL}${topic}.json?api-key=${NYTimesAPI_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles that don't have the required properties
  const filteredArticles = articles.filter(article => 
    article.title && 
    article.abstract && 
    article.published_date && 
    article.url && 
    article.multimedia && 
    article.multimedia.length > 0
  ).slice(4, 8);

  return (
    <div className="flex flex-wrap justify-center mt-8">
        
      {filteredArticles.length > 0 ? (
        filteredArticles.map(article => (
          <ArticleCard key={article.uri} article={article} />
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
}

export default ArticleIndex;
