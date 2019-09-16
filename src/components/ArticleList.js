import React from 'react';
import Article from './Article';

export default function ArticleList({articles}) {
    console.log(articles);

    const articleElements = articles.map((article, index) => (
        <li key={article.id}>
            <Article article={articles[index]} />
        </li>
    ))

    return (
        <ul>
            {articleElements}
        </ul>
    )
}