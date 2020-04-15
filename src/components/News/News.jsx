import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './News.styles';
import NewsSection from '../NewsSection/NewsSection';

const News = (props) => (
  <div className="NewsWrapper">
    <NewsSection news={props.news} query={props.query}/>
  </div>
);

News.propTypes = {
  // bla: PropTypes.string,
};

News.defaultProps = {
  // bla: 'test',
};

export default News;
