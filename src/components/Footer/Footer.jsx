import React, { PureComponent } from 'react';
import insta from './insta.svg';
import fb from './fb.svg';
import linkedin from './linkedin.svg';
import PropTypes from 'prop-types';
//import { Test } from './Footer.styles';

class Footer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Footer will mount');
  }

  componentDidMount = () => {
    console.log('Footer mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Footer will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Footer will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Footer did update');
  }

  componentWillUnmount = () => {
    console.log('Footer will unmount');
  }

  render () {
    const extLink = '. External link';
    return (
        <footer>
          <div className="social-icon-div">
            <a href="https://instagram.com/vasudevaartschool" target="_blank" title={`Connect with me on Instagram ${extLink}`}>
            <img src={insta} alt="link to vasudeva art school instagram page" className="social-icon"/>
            </a>
            <a href="https://www.facebook.com/vasudevaartschool" target="_blank" title="Connect with me on  Facebook">
            <img src={fb} alt="link to vasudeva art school facebook page" className="social-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/vasudevapitta" target="_blank" title="Connect with me on Linkedin">
            <img src={linkedin} alt="link to vasudeva pitta linkedin page" className="social-icon"/>
            </a>
          </div>
          <small>Learn more <a href="https://www.who.int/health-topics/coronavirus" target="_blank" rel="noopener">https://www.who.int</a></small>
        </footer>
    );
  }
}

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
