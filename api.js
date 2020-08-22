$(document).ready(function(){

      function lyrics(artist, title) {

		$.ajax({
			url: `https://api.lyrics.ovh/v1/${artist}/${title}`
		}).then(function (response) {
			console.log(response);
			renderLyrics(response.lyrics);
		});
	}

	function similarity (title) {

		$.ajax({
			url: `http://www.songsterr.com/a/ra/songs.json?pattern=${title}`
		}).then(function (songs) {
                  console.log(songs);
                  $.each(songs, function(_index, song){
                        console.log(song);
                  })
               
			// console.log(song.lyrics);
		});
      }
      
      function renderLyrics (lyrics) {
            const song = $('<div>');
            song.text(lyrics);
            $('#songs').append(song)
      }

      function renderSimilarity (similar) {

            console
            const similarDiv = $('<div>');
            similarDiv.text(similar)
            $('#songs').append(similarDiv);
      }

	// lyrics('the police', 'roxanne');

      // similarity('roxanne')
      
      $('#searchForm').on('submit', function(event) {
            event.preventDefault();
            const artist = $('#artist').val();
            const title = $('#lyric').val();
            console.log(artist);
            console.log(title)
            lyrics(artist, title);
            similarity(title);
      })

            
      $('#searchFormBtn').on('click', function(event) {
            event.preventDefault();
            const artist = $('#artist').val();
            const title = $('#lyric').val();
            console.log(artist);
            console.log(title)
            lyrics(artist, title);
            similarity(title);
      })






});

