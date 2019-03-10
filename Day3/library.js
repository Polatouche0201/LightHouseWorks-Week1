var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
var printPlaylists = function () {
  for(var list in library.playlists) {
    var output = "";
    output += list + ": ";
    output += library.playlists[list].name + " - ";
    output += library.playlists[list].tracks.length + " tracks";
    //output += Object.keys(library.playlists)[0] + ": ";
    //output += library.playlists.p01.name + " - ";
    //output += library.playlists.p01.tracks.length + " tracks";
    console.log(output);
  }
  //return output;
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
var printTracks = function () {
  for(var track in library.tracks) {
    var output = "";
    output += track + ": ";
    output += library.tracks[track].name + " by ";
    output += library.tracks[track].artist + " (";
    output += library.tracks[track].album + " )";
    console.log(output);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
var printPlaylist = function (playlistId) {
  var playListFound = false;
  for(var list in library.playlists) {
    var listID = library.playlists[list].id;
    if(listID === playlistId) {
      // 1. Found the target play list
      playListFound = true;
      var output = "";
      output += listID + ": ";
      output += library.playlists[list].name + " - ";
      var trackNum = library.playlists[list].tracks.length;
      output += trackNum + " tracks";
      console.log(output);
      // 2. list all the tracks
      for(var i = 0; i < trackNum; i ++) {
        var targetTrack = library.playlists[list].tracks[i];
        for(var track in library.tracks) {
          var trackID = library.tracks[track].id;
          if(trackID === targetTrack) {
            // 3. Found target tracks
            playListFound = true;
            var output = "";
            output += track + ": ";
            output += library.tracks[track].name + " by ";
            output += library.tracks[track].artist + " (";
            output += library.tracks[track].album + " )";
            console.log(output);
          }
        }
      }
    }
  }
  if(!playListFound)
    console("The " + playlistId + "cannot be found!");
}

// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {
  // var trackNum = Object.keys(library.tracks).length;
  // console.log(trackNum);
  var trackFound = false;
  for(var track in library.tracks) {
    if(library.tracks[track].id === trackId) {
      trackFound = true;
    }
  }
  if(!trackFound) {
    console.log("Track " + trackId + " does not exit in the track list!");
    return;
  }

  var playListFound = false;
  for(var list in library.playlists) {
    var listID = library.playlists[list].id;
    if(listID === playlistId) {
      // 1. Found the target play list
      playListFound = true;
      // 2. list all the tracks
      var trackFound = false;
      for(var i = 0; i < library.playlists[list].tracks.length; i ++) {
        var trackExist = library.playlists[list].tracks[i];
        if(trackExist === trackId) {
          // 3. Found target tracks
          trackFound = true;
          console.log("The " + trackId + " is already exist in the list!");
        }
      }
      if(!trackFound) {
        library.playlists[list].tracks.push(trackId);
        console.log("New track: " + trackId + " is added to the list: " + list);
      }
    }
  }
  if(!playListFound)
    console.log("The " + playlistId + "cannot be found!");
}

// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
var addTrack = function (name, artist, album) {
  var newTrackID = uid();
  library.tracks[newTrackID] = {};
  library.tracks[newTrackID].id = newTrackID;
  library.tracks[newTrackID].name = name;
  library.tracks[newTrackID].artist = artist;
  library.tracks[newTrackID].album = album;
}

// adds a playlist to the library
var addPlaylist = function (name) {
  var newListID = uid();
  library.playlists[newListID] = {};
  library.playlists[newListID].id = newListID;
  library.playlists[newListID].name = name;
  library.playlists[newListID].tracks = [];
  library.playlists[newListID].tracks.push("t01");
  library.playlists[newListID].tracks.push("t02");
  library.playlists[newListID].tracks.push("t03");
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
var stringSearch = function (trackInfo, string) {
  var result = trackInfo.search(string);
  return result;
}

var printTrackInfo = function(trackKey) {
  console.log(library.tracks[trackKey]);
}

var printSearchResults = function(query) {
  var queryFound = false;
  for(var track in library.tracks) {
    if(stringSearch(library.tracks[track].id, query) >= 0) {
      queryFound = true;
      printTrackInfo(track);
    }
    if(stringSearch(library.tracks[track].name, query) >= 0) {
      queryFound = true;
      printTrackInfo(track);
    }
    if(stringSearch(library.tracks[track].artist, query) >= 0) {
      queryFound = true;
      printTrackInfo(track);
    }
    if(stringSearch(library.tracks[track].album, query) >= 0) {
      queryFound = true;
      printTrackInfo(track);
    }
  }
  if(!queryFound) {
    console.log("No Result!");
  }
}

//Tested Funcions

//printPlaylists();

//printTracks();

//printPlaylist("p01");

//addTrackToPlaylist("t04", "p02");
//console.log(library.playlists);

//addTrack("HJ", "Pola", "HAOYU");
//console.log(library.tracks);

//addPlaylist("HJ Play List");
//console.log(library.playlists);

//printSearchResults("code");