import React from 'react';

const NewsArticle = ({ article }) => {
    const renderArticleHours = datetime => {
        const difference = (Math.floor(Date.now() / 1000)) - datetime;

        return Math.floor(difference / 3600);
    }

    return (
        <a
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'black' }}
        >
            <h5 className='ui header'>
                {article.source} {renderArticleHours(article.datetime)}h
            </h5>
            <div className='ui grid'>
                <div className='row'>
                    <div className='twelve wide column'>
                        <h4 className='ui header'>{article.headline}</h4>
                        <p>{article.summary}</p>
                    </div>
                    <div className='four wide column'>
                        <img className='ui small image' alt='article' src={article.image} />
                    </div>
                </div> 
            </div>
            <div className='ui section divider' />
        </a>
    );
};

export default NewsArticle;