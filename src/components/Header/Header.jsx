import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';

class Header extends PureComponent { 
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    console.log('Header will mount');
  }

  componentDidMount = () => {
    console.log('Header mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Header will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Header will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Header did update');
  }

  componentWillUnmount = () => {
    console.log('Header will unmount');
  }

  render(){
    return(
      <header>
      <h1>
      What's Going On
      </h1>
      <section className="search">
      <form onSubmit={this.props.userCustomSearch}>
      <input type="text" value={this.props.query} onChange={this.props.handleChange}>
      </input>
      <button type="submit">Search</button>
      </form>
      </section>
    </header>
    )
  }
}

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
