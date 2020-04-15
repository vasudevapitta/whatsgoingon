import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NewsSection.styles';
import LazyLoad from'react-lazyload';

class NewsSection extends Component {
  render(){
    const articles = this.props.news.articles;
    const query = this.props.query;
    return(
      <React.Fragment>
        {articles && articles.map((article, i)=> JSON.stringify(article).toLowerCase().includes(query.toLowerCase()) &&
        <div className="news-section" key={i}>
        {article.title && <h2>{article.title}</h2>}
        {article.publishedAt && <p>{article.publishedAt.slice(0,10)}</p>}
        <LazyLoad>
        <figure>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="img"/>}
          {article.description && <figcaption>{article.description}</figcaption>}
        </figure>
        </LazyLoad>
        {article.content && <p>{article.content}</p>}
        {article.url && <span><a href={article.url} target="_blank" rel="noopener">Read more (external link)</a></span>}
        {article.author && <h5>Author- {article.author}</h5>}
        </div>
        )}
      </React.Fragment>
    )
  }
  
}

NewsSection.propTypes = {
  // bla: PropTypes.string,
};

NewsSection.defaultProps = {
  // bla: 'test',
};

export default NewsSection;
