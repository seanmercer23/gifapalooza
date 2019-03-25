import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Search from './Search'
import Random from './Random'

const apiKey = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: "",
      gifs: ""
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.getAPI=this.getAPI.bind(this)
    this.renderGifs=this.renderGifs.bind(this)
  }

  getAPI(){
    fetch(`https://api.tenor.com/v1/search?q=${this.state.value}&key=${apiKey}&limit=10`)
    .then(response => response.json())
    .then(json => this.setState({gifs: json.results}))
  }

  handleChange(search) {
    this.setState({value: search.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.getAPI()
  }

  renderGifs () {
    if(Array.isArray(this.state.gifs) === true) {
      return this.state.gifs.map(gifItem => <a href={gifItem.itemurl} key={gifItem.id}><img src={gifItem.media[0].gif.url} alt={`${this.state.value} gif`}/></a>)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route 
            exact path="/"
            component={Home}
              />
          <Route 
            exact path="/main" 
            component={Main}
            /> 
          <Route 
            exact path="/search"
            render={(props) =>
              <Search 
                {...props}
                value = {this.state.value}
                gifs = {this.state.gifs}
                handleSubmit = {this.handleSubmit}
                handleChange = {this.handleChange}
                getAPI = {this.getAPI}
                renderGifs = {this.renderGifs}
                />
              }
            />

          <Route 
            exact path="/random"
            render={(props) =>
              <Random 
                {...props}
                />
              }
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
