import React from 'react';
import { connect } from 'react-redux';

import NewsArticle from './NewsArticle';

const News = props => {
    const renderNews = () => {
        if (props.news) {
            return props.news.filter(article => article.image).slice(0, 5)
            .map(article => <NewsArticle article={article} key={article.id} />)
        }
    }
    
    return (
        <div>
            <h2 className='ui header'>News</h2>
            {renderNews()}
        </div>
    );
};

const mapStateToProps = state => {
    return { news: state.news }
};

export default connect(mapStateToProps)(News);