function lyrics(artist, title) {

      $.ajax({
            url: `https://api.lyrics.ovh/v1/${artist}/${title}`
      }).then(function (response) {
            console.log(response);
            console.log(response.lyrics);
      });
}

function similarity (title) {

      $.ajax({
            url: `http://www.songsterr.com/a/ra/songs.xml?pattern=${title}`
      }).then(function (song) {
            console.log(song);
            // console.log(song.lyrics);
      });
}

lyrics('the police', 'roxanne');

similarity('roxanne')