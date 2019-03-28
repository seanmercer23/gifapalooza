import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Search from './Search'
import Random from './Random'
import SpinSound from './spin_sound.m4a'

const apiKey = process.env.REACT_APP_API_KEY
const randomWords = require('random-words')
let counter = 0

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: "",
      gifs: "",
      randomGif: "",
      condition: false,
      randomDisplay: false,
      searchDisplay: true
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.getAPI=this.getAPI.bind(this)
    this.renderGifs=this.renderGifs.bind(this)
    this.getRandomAPI=this.getRandomAPI.bind(this)
    this.renderRandomGif=this.renderRandomGif.bind(this)
    this.handleRandomClick=this.handleRandomClick.bind(this)
    this.spinEnd=this.spinEnd.bind(this)
    this.nextResults=this.nextResults.bind(this)
  }

  getAPI(){
    fetch(`https://api.tenor.com/v1/search?q=${this.state.value}&key=${apiKey}&limit=9&ar_range=wide`)
    .then(response => response.json())
    .then(json => this.setState({gifs: json.results, next: json.next}))
  }

  handleChange(search) {
    this.setState({value: search.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.getAPI()
    this.setState({searchDisplay: false})
  }

  renderGifs () {
    if(Array.isArray(this.state.gifs) === true) {
      return (this.state.gifs.map(gifItem => 
      <a href={gifItem.itemurl} 
      key={gifItem.id}>
      <img src={gifItem.media[0].gif.url} 
      alt={`${this.state.value} gif`}
      className = "search-result"
      />
      </a>))
    }
  }

  getRandomAPI(){
    let randomGifArray = []
    fetch(`https://api.tenor.com/v1/random?q=${randomWords()}&key=${apiKey}&limit=50&ar_range=wide`)
    .then(response => response.json())
    .then(json => json.results.map(result => 
      randomGifArray.push(result.media[0].gif.url)
      )
    )
    this.setState({randomGif: randomGifArray})
  }

  componentDidMount() {
    this.getRandomAPI()
  }
  renderRandomGif(){
    if(this.state.randomGif !== "") {
      return (<a href={this.state.randomGif[counter]}>
      <img className={this.state.randomDisplay ? "random-result" : "hide-random-result"} 
      src={this.state.randomGif[counter]}
       alt="random gif" 
       />
       </a>)
    }
  }

  handleRandomClick () {
    const spinSound = document.querySelector('.spin-sound')
    spinSound.play()
    setTimeout(this.setState({condition: !this.state.condition}), 3000)
    setTimeout(function(){this.setState({randomDisplay: true})}.bind(this), 7200)
  }

  spinEnd () {
    counter++
    setTimeout(function(){this.setState({condition: !this.state.condition})}.bind(this), 500)
  }

  nextResults () {
    fetch(`https://api.tenor.com/v1/search?q=${this.state.value}&key=${apiKey}&limit=9&ar_range=wide&pos=${this.state.next}`)
    .then(response => response.json())
    .then(json => this.setState({gifs: json.results, next: json.next}))
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.searchDisplay ? "App-no-gifs" : "App"}>
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
                nextResults={this.nextResults}
                searchDisplay={this.state.searchDisplay}
                />
              }
            />

          <Route 
            exact path="/random"
            render={(props) =>
              <Random 
                {...props}
                renderRandomGif={this.renderRandomGif}
                handleRandomClick={this.handleRandomClick}
                condition={this.state.condition}
                spinEnd={this.spinEnd}
                spinSound={this.spinSound}
                searchDisplay={this.state.searchDisplay}
                />
              }
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
