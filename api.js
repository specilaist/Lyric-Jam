$(document).ready(function(){

      let searched = [];

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
                  $('#possible').empty();
                  console.log(songs);
                  $.each(songs, function(_index, song){
                        console.log(song);
                        const poppe = $('<button>');
                        poppe.addClass('songBtns');
                        poppe.attr('data-artist', song.artist.name);
                        poppe.attr('data-title', song.title);
                        poppe.text(song.artist.name + " - " + song.title);
                        $('#possible').append(poppe);

                  })
               
			// console.log(song.lyrics);
		});
      }
      
      function renderLyrics (lyrics) {
            console.log(lyrics);
            $('#lyric').empty();
            let searchedSong = $('<p>');
            searchedSong.text(lyrics);
            console.log(searchedSong);
            $('#lyric').append(searchedSong);
      }

      function renderSimilarity (similar) {
            const similarDiv = $('<div>');
            similarDiv.text(similar)
            $('#possible').append(similarDiv);
      }

      
      $('#searchForm').on('submit', function(event) {
            event.preventDefault();
            const artist = $('#artist').val();
            const title = $('#lyricSearch').val();
            console.log(artist);
            console.log(title)
            // lyrics(artist, title);
            similarity(title);
      })

            
      $(document).on('click', '.songBtns', function(event) {
            event.preventDefault();
            console.log($(this).attr('data-artist'));
            console.log($(this).attr('data-title'));
            const artist = $(this).attr('data-artist');
            const title = $(this).attr('data-title');
            console.log(artist);
            console.log(title)
            lyrics(artist, title);
            // similarity(title);
            localStorage.setItem('searchedArtist', JSON.stringify(artist));
            localStorage.setItem('searchedTitle', JSON.stringify(title));



      })






});

