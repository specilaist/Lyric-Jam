$(document).ready(function(){

      let searched = [];

      // Creates a list from the local storage of buttons already searched
      function memoryList () {
            // $('#favList').empty();
            let favorites = JSON.parse(localStorage.getItem('allEntries'))
            console.log(favorites);
            $.each(favorites, function(_index, favs) {
                  console.log(favs);
                  const favDiv = $('<div>');
                  favDiv.addClass('favDiv');
                  const favList = $('<button>');
                  favList.attr('data-artist', favs.searchArtist);
                  favList.attr('data-title', favs.searchedTitle);
                  const deleteButton = $('<button>');
                  deleteButton.addClass('deleteBtns');
                  const deleteIcon = $('<i>')
                  deleteIcon.addClass('fa fa-close');
                  deleteButton.append(deleteIcon);
                  favList.text(favs.searchArtist + " - " + favs.searchedTitle);
                  favList.addClass('favBtns');
                  favDiv.append(favList, deleteButton);
                  $('#favList').append(favDiv);
            });
      }

      memoryList();


      // AJAX request for lyrics
      function lyrics(artist, title) {

		$.ajax({
			url: `https://api.lyrics.ovh/v1/${artist}/${title}`
		}).then(function (response) {
			console.log(response);
			renderLyrics(response.lyrics);
		});
	}

      // This funtion will render similar songs and create buttons for those songs
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
		});
      }
      

      function renderLyrics (lyrics) {
            console.log(lyrics);
            $('#output').empty();
            let searchedSong = $('<p>');
            searchedSong.text(lyrics);
            console.log(searchedSong);
            $('#output').append(searchedSong);
      }

      // function renderSimilarity (similar) {
      //       const similarDiv = $('<div>');
      //       similarDiv.text(similar)
      //       $('#possible').append(similarDiv);
      // }

      // Onclick listener for search button
      $('#searchForm').on('submit', function(event) {
            event.preventDefault();
            const artist = $('#artist').val();
            const title = $('#lyricSearch').val();
            console.log(artist);
            console.log(title)
            similarity(title);
            lyrics(artist, title);
      })

      // Onclick listener for possible songs to render lyrics
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
            let allEntries = JSON.parse(localStorage.getItem('allEntries'));
            console.log(allEntries);
            let searchedItems = {
                  'searchArtist': artist,
                  'searchedTitle': title,
            }
            console.log(searchedItems)
            if (allEntries) {
                  searched.push(searchedItems);
            } else {
                  localStorage.setItem('allEntries', []);
            }
            localStorage.setItem('allEntries', JSON.stringify(searched));
            memoryList()
      });

      // Onclick listener for favorite Buttons for posting lyrics
      $(document).on('click', '.favBtns', function(event) {
            event.preventDefault();
            console.log($(this).attr('data-artist'));
            console.log($(this).attr('data-title'));
            const artist = $(this).attr('data-artist');
            const title = $(this).attr('data-title');
            console.log(artist);
            console.log(title)
            lyrics(artist, title);
      });

      //Delete favBtns by selecting close button
      $(document).on('click', '.deleteBtns', function(event) {
            event.preventDefault();
            console.log($(this));
            const removeFav = $(this).siblings();
            const removeArtist = removeFav[0].dataset.artist;
            const removeTitle = removeFav[0].dataset.title;
            console.log(removeFav);
            let remove = JSON.parse(localStorage.getItem('allEntries'));
            let updatedList = remove.filter(function(favorite) {
                  // console.log(favorite);
                  console.log(favorite.searchArtist);
                  console.log(favorite.searchedTitle);
                  console.log(removeFav[0].dataset.artist);
                  console.log(removeFav[0].dataset.title);
                  const removeStorageArtist = favorite.searchArtist;
                  const removeStorageTitle = favorite.searchedTitle;
                  if (removeArtist === removeStorageArtist && removeTitle === removeStorageTitle) {
                        return false;
                  } else {
                        return true;
                  };

            });
            console.log(updatedList);
            localStorage.setItem('allEntries', JSON.stringify(updatedList));
            memoryList();
      });
});

