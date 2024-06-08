import React from 'react'

function ArticleCard({ article }) {
  return (
    <div className="">
      <img className="" src={article.multimedia[0]?.url} alt={article.multimedia[0]?.caption} />
      <div className="">
        <div className="">{article.title}</div>
        <p className="">
          {new Date(article.published_date).toLocaleDateString()}
        </p>
        <p className="">
          {article.abstract}
        </p>
        <div className="">
          <a 
            href={article.url} 
            className=""
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard