# Gifapalooza
---

Gifapalooza is a gif app built in React using CSS, JavaScript, and React Router while also leveraging the [Tenor Gif API](https://tenor.com/gifapi/documentation) to provide the gifs for the app.  The app has two main functionalities: a gif search where gif results are returned based on a user input search term and a random gif functionality which is activated by spinning the **Wheel of Gifs**.

---

The Wireframe and original proposal for this project can be found [here.](https://docs.google.com/presentation/d/15niit84v-hF4xmKODcesMx8xqWldnVyK_XHxSUAVfZ4/edit?usp=sharing).

---

The code for rendering the gifs produced by the user search can be found below:
```renderGifs () {
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
  ```
The way it works is by first checking if the results returned from the fetch call are in an array as expected and if that condition evaluates true it will map through that array creating an image element wrapped in an anchor element for each item in the array and then render all of that on the page.

---

* Users can use the app to enter a search term and find gifs related to that term
* Alternatively users can navigate to the random gif page and spin the **Wheel of Gifs** to get a random gif

---

Deployed app can be found here:
[https://sm-gifapalooz.herokuapp.com/](https://sm-gifapalooz.herokuapp.com/)

---

## Credits
Gifs provided by the Tenor Gif API using the Search and Random Endpoints more documentation can be found at the link below
[https://tenor.com/gifapi/documentation](https://tenor.com/gifapi/documentation)

Random words for the Random gif function's query requirement provided by the random-words npm dependency the repo is linked below
[https://github.com/punkave/random-words](https://github.com/punkave/random-words)

Background gradients for the header and footer provided by UI Gradients linked below
[https://uigradients.com/](https://uigradients.com/)
