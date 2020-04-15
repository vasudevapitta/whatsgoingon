import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Load from './components/Load/Load';
import News from './components/News/News';

class App extends Component {
  constructor(){
    super();
    this.state = {
      news: [],
      loading: false,
      query: '',
      userCustomSearch: ''
    }
  }

  handleChange=e=>{
    this.setState({
      query: e.target.value
    });
  }

  userCustomSearch=e=>{
    e.preventDefault();
    this.setState({
      userCustomSearch: this.state.query
    });
  }
 
  async componentDidMount() {
    this.setState({loading: true});

    const API_KEY = '4b64ca4f39cb4f52a5ff2843d6f01541';
    const url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

     try {
      const news=await fetch(url)
          .then(res => res.json())
          .then(res=>this.setState({news: res}))
          .then(this.setState({loading: false}))
          console.log(this.state.news);
     }

     catch(err) {
      console.log(err)
     }
  }


  async componentDidUpdate() {
    const userCustomSearch = this.state.userCustomSearch;
    if(userCustomSearch.trim("")){
      const API_KEY = '4b64ca4f39cb4f52a5ff2843d6f01541';
      const url=`https://newsapi.org/v2/everything?q=${userCustomSearch}&apiKey=${API_KEY}`;

      try {
        const news=await fetch(url)
            .then(res => res.json())
            .then(res=>this.setState({news: res}))
            .then(this.setState({loading: false}))
            this.setState({userCustomSearch: ''});
      }

      catch(err) {
        console.log(err)
      }
    }
  }

  render(){
    return (
      <React.Fragment>
      <Header
      handleChange={this.handleChange}
      query={this.state.query}
      userCustomSearch={this.userCustomSearch}/>

      {this.state.loading ? <Load/> : ''}
      {this.state.loading ? '': <News news={this.state.news} query={this.state.query}/>}
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
