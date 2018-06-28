const firestore = require('./firebase/firestore');
const axios = require('axios');
const moment = require('moment');
const { convertTimestampToDate } = require('./globalHelpers');
const Spotify = require('node-spotify-api');
const dotenv = require('dotenv');
dotenv.config();

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const spotify = new Spotify({
  id: spotifyClientId,
  secret: spotifyClientSecret
});

const getArtistDataFromSpotify = ( name ) => {
  return spotify.search({type: 'artist', query: name})
    .then(searchData => {
      if(searchData.artists.items.length == 0 ) {
        throw new Exception(["Artist not found"]);
      }
      const artist = searchData.artists.items[0];
      const artistId = artist.id;

      return Promise.all([
        searchData,
        spotify.request(`https://api.spotify.com/v1/artists/${artistId}/related-artists`)
      ])
    })
    .then(results => {
      console.log(results);
        var artistData = results[0].artists.items[0];
        var relatedArtists = results[1].artists;
        var imageUrl = "";
        if (artistData.images[0] && artistData.images[0].url)  {
          imageUrl = artistData.images[0].url;
        }
        var artist = {
          artistId: artistData.id,
          name: artistData.name,
          imageUrl: imageUrl,
          genres: artistData.genres,
          relatedArtists: relatedArtists
        };
        return firestore.collection("artists").doc(artist.artistId).set(artist, {merge: true}).then(
          () => artist
        );
    })
}

const getArtistInfoFromFirebase = (name) => {
  var artistsRef = firestore.collection('artists');

  var queryRef = artistsRef.where('name', '==', name);
  return queryRef.get();
}

const formatVideos = (videos) => {
  if(videos) {
    return videos.map(video => {
      video.lastFetchedAt = convertTimestampToDate(video.lastFetchedAt.seconds);
      video.date = moment.unix(video.date.seconds).toDate();
      return video;
    })
  } else {
    return []
  }
}

const formatArtistData = artist => {
  artist.videos = formatVideos(artist.videos);
  artist.videosLastFetchedAt = artist.videosLastFetchedAt ? convertTimestampToDate(artist.videosLastFetchedAt) : null;
  artist.articlesLastFetchedAt = artist.articlesLastFetchedAt ? convertTimestampToDate(artist.articlesLastFetchedAt) : null;
  return artist;
}

const fetchArtist = (name) => {
  var promise = new Promise(function(resolve, reject) {
    getArtistInfoFromFirebase(name).then(result => {
        if(!result.empty) {
          console.log("Data found on Firestore for artist => " + name);
          resolve(formatArtistData(result.docs[0].data()));
        } else {
          console.log("Data not found on Firestore for artist => " + name + ". Now fetching from spotify...");
          getArtistDataFromSpotify(name)
          .then(artist => {
            resolve(formatArtistData(artist));
          })
        }
      }).catch(err => {
        reject(err);
      });
  });
  return promise;
}

module.exports = fetchArtist;
