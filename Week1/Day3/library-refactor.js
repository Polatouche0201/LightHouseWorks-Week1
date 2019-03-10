var library = {
  // Tracks and Play Lists Database
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
             },
  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
    for(var list in this.playlists) {
      var output = "";
      output += list + ": ";
      output += this.playlists[list].name + " - ";
      output += this.playlists[list].tracks.length + " tracks";
      console.log(output);
    }
  },
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    for(var track in this.tracks) {
      var output = "";
      output += track + ": ";
      output += this.tracks[track].name + " by ";
      output += this.tracks[track].artist + " (";
      output += this.tracks[track].album + " )";
      console.log(output);
    }
  },
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    var playListFound = false;
    for(var list in this.playlists) {
      var listID = this.playlists[list].id;
      if(listID === playlistId) {
        // 1. Found the target play list
        playListFound = true;
        var output = "";
       output += listID + ": ";
        output += this.playlists[list].name + " - ";
        var trackNum = this.playlists[list].tracks.length;
        output += trackNum + " tracks";
        console.log(output);
        // 2. list all the tracks
        for(var i = 0; i < trackNum; i ++) {
          var targetTrack = this.playlists[list].tracks[i];
          for(var track in this.tracks) {
            var trackID = this.tracks[track].id;
            if(trackID === targetTrack) {
              // 3. Found target tracks
              playListFound = true;
              var output = "";
              output += track + ": ";
              output += this.tracks[track].name + " by ";
              output += this.tracks[track].artist + " (";
              output += this.tracks[track].album + " )";
              console.log(output);
            }
          }
        }
      }
    }
    if(!playListFound)
     console("The " + playlistId + "cannot be found!");
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    var trackFound = false;
    for(var track in this.tracks) {
      if(this.tracks[track].id === trackId) {
        trackFound = true;
      }
    }
    if(!trackFound) {
      console.log("Track " + trackId + " does not exit in the track list!");
      return;
    }

    var playListFound = false;
    for(var list in this.playlists) {
      var listID = this.playlists[list].id;
      if(listID === playlistId) {
        // 1. Found the target play list
        playListFound = true;
        // 2. list all the tracks
        var trackFound = false;
        for(var i = 0; i < this.playlists[list].tracks.length; i ++) {
          var trackExist = this.playlists[list].tracks[i];
          if(trackExist === trackId) {
            // 3. Found target tracks
            trackFound = true;
            console.log("The " + trackId + " is already exist in the list!");
          }
        }
        if(!trackFound) {
          this.playlists[list].tracks.push(trackId);
          console.log("New track: " + trackId + " is added to the list: " + list);
        }
      }
    }
    if(!playListFound)
      console.log("The " + playlistId + "cannot be found!");
  },
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  // adds a track to the library
  addTrack: function (name, artist, album) {
    var newTrackID = this.uid();
    this.tracks[newTrackID] = {};
    this.tracks[newTrackID].id = newTrackID;
    this.tracks[newTrackID].name = name;
    this.tracks[newTrackID].artist = artist;
    this.tracks[newTrackID].album = album;
  },
  // adds a playlist to the library
  addPlaylist: function (name) {
    var newListID = this.uid();
    this.playlists[newListID] = {};
    this.playlists[newListID].id = newListID;
    this.playlists[newListID].name = name;
    this.playlists[newListID].tracks = [];
    this.playlists[newListID].tracks.push("t01");
    this.playlists[newListID].tracks.push("t02");
    this.playlists[newListID].tracks.push("t03");
  },
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  stringSearch: function (trackInfo, string) {
    var result = trackInfo.search(string);
    return result;
  },
  printTrackInfo: function(trackKey) {
    console.log(this.tracks[trackKey]);
  },
  printSearchResults: function(query) {
    var queryFound = false;
    for(var track in this.tracks) {
      if(this.stringSearch(this.tracks[track].id, query) >= 0) {
        queryFound = true;
        this.printTrackInfo(track);
      }
      if(this.stringSearch(library.tracks[track].name, query) >= 0) {
        queryFound = true;
        this.printTrackInfo(track);
      }
      if(this.stringSearch(library.tracks[track].artist, query) >= 0) {
        queryFound = true;
        this.printTrackInfo(track);
      }
      if(this.stringSearch(library.tracks[track].album, query) >= 0) {
        queryFound = true;
        this.printTrackInfo(track);
      }
    }
    if(!queryFound) {
      console.log("No Result!");
    }
  }
}

//Tested Funcions

//library.printPlaylists();

//library.printTracks();

//library.printPlaylist("p01");

//library.addTrackToPlaylist("t04", "p02");
//console.log(library.playlists);

//library.addTrack("HJ", "Pola", "HAOYU");
//console.log(library.tracks);

//library.addPlaylist("HJ Play List");
//console.log(library.playlists);

//library.printSearchResults("code");