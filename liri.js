require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

if (process.argv[2] === 'concert-this') {
  var artistName = process.argv.slice(3).join(" ");
  axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
    function (response) {
      for (var i = 0; i < 5; i++) {
        console.log(response.data[i].datetime);
        console.log(response.data[i].venue.name);
        console.log(response.data[i].venue.city);
        console.log("");
      }

    })
}
if (process.argv[2] === 'spotify-this' && typeof process.argv[3] === 'string') {
  var songName = process.argv.slice(3).join(" ");
  spotifyIt(songName);

} else if (process.argv[2] === 'spotify-this') {
  spotifyIt("I Saw the Sign");
}



if (process.argv[2] === 'movie-this' && typeof process.argv[3] === "string") {
  var movieName = process.argv.slice(3).join(" ");
  axios.get("http://www.omdbapi.com/?t= " + movieName + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.imdbRating);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);


    });
} else if (process.argv[2] === 'movie-this') {
  axios.get("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.imdbRating);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);


    });

}

if (process.argv[2] === 'do-what-it-says') {
  fs.readFile("random.txt", "utf8", function (error, data) {

    if (error) {
      return console.log(error);
    } else{
    var dataArray = data.split(",");
    spotifyIt(dataArray[1]);
    }
    

  });
}

function spotifyIt(songName) {
  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    else {
      var songInfo = data.tracks.items[0];
      console.log(songInfo.artists[0].name)
      console.log(songInfo.name)
      console.log(songInfo.album.name)
      console.log(songInfo.external_urls.spotify);
    };
  });
}