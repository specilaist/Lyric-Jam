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
		}).then(function (song) {
                  console.log(song);
                  renderSimilarity(song[0].tabTypes)
			// console.log(song.lyrics);
		});
      }
      
      function renderLyrics (lyrics) {
            const song = $('<div>');
            song.text(lyrics);
            $('body').append(song)
      }

      function renderSimilarity (similar) {

            const similarDiv = $('<div>');
            similarDiv.text(similar)
            $('body').append(similarDiv);
      }

	// lyrics('the police', 'roxanne');

      // similarity('roxanne')
      
      $('#inputForm').on('submit', function(event) {
            event.preventDefault();
            const artist = $('#artist').val();
            const title = $('#title').val();
            lyrics(artist, title);
            similarity(title);
      })


});

