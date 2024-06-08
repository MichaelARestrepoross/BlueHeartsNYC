import React from 'react'

function ArticleCard({ article }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <img className="w-full max-h-48 object-cover" src={article.multimedia[0]?.url} alt={article.multimedia[0]?.caption} />
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2">{article.title}</div>
        <p className="text-gray-700 text-base mb-2">
          {new Date(article.published_date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base flex-grow">
          {article.abstract}
        </p>
        <div className="flex justify-center items-end mt-auto">
          <a 
            href={article.url} 
            className="inline-block mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here to go to the article
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard