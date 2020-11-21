/*
> Jim Carroll |
> 10/23/2020 |
> [GitHub Profile](https://github.com/pulamusic)
*/

// https://dog.ceo/api/breeds/image/random

/*
example from https://dog.ceo/dog-api/documentation/random
shows the json response for an api call for a random dog

  {
      "message": "https://images.dog.ceo/breeds/cairn/n02096177_3203.jpg",
      "status": "success"
  }

*/
// ========


// code borrowed from https://codepen.io/elliottlan/pen/MNEWNx

// function to perform a get request
function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ) // false for synchronous request
    xmlHttp.send( null )
    return xmlHttp.responseText
}

// function to get a random image
function getRandomImage() {
  const dogurl = 'https://dog.ceo/api/breeds/image/random'

  // get the json from the server
  let json = httpGet(dogurl)
  console.log(json)

  // decode the json into an array
  let array = JSON.parse(json)
  console.log(array)

  // get the image url from the array
  let url = array.message
  console.log(url)

  // get the image object
  let image = document.getElementsByClass('dogImage')

  // set the src of the image object
  image.src = url
}
