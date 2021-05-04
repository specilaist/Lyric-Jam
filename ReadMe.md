# Lyric Jam

## User Story:
Our users would like the ability to listen to music while doing everyday activities and find that song later by using just one word. People are always looking for new forms of music and streaming companies make those songs more accessible than ever before. 

With Lyric Jam our users will be able to find lyrics to rap and sing-a-long to with a simple word. Our community of sing users can be promoted through our app by creating groups of fans for certain songs. The potential is limitless for how we can foster a reliable group of users through the fun of singing to your favorite song.


## Description
Lyric Jam is a web application that uses JQuery, CSS, and HTML to allow users to search for songs, find lyrics for the song, and render the lyrics.

## Process:
We began our process by thinking about what our users would like to do. The need for knowing lyrics is important because people often hear a song and don’t know how to identify it. At lyricJam, we created an app that takes very minimal inputs and spits out lyrics that help users remember songs forever. 

First we brainstormed by looking through the list of API’s and determining which ones we could use effectively. As we brainstormed we realized we could combine the Songsterr and Lyrics API to create a powerful app that could search for songs and let you see the lyrics. 

Then we thought about how to set up the code for such an application. We wanted to start with the user and grab their input. Then we ran user input into the Songsterr API which gave us an array of like songs. We grab the elements of the title and artist for all the songs that Songsterr provides. We created a button for each element in the Songsterr array. On the ‘click’ listener for the document put the title and artist of the button we select into the local storage. A button is created in the favs <div> that is generated from local storage.

![Screenshot of Code](images/ezgif.com-video-to-gif.gif)

Whenever any of the buttons are clicked the lyrics are rendered to the scroll search. This can be done over and over. We wanted to make sure to make it so people would have to manually delete a song in order to remove it from the Favorite list because we don’t want people to forget it and not be able to find it later.

We then created our CSS layout and linked the ID and Class tags in order to make the application link to the page. We decided on a layout that looked fun and reminded people of the food and music Jam.


## Issues:
Eban: for me, adding the favorites in a way that utilized the local storage, but still allowed the workflow of the app. My success was being able to understand the process of pushing, pulling and removing info from local storage. My tutor helped me, and that opened pandora’s box.

Tara: I used an app like photoshop for the first time to create the CD picture, but issues I had with the style was mainly getting the output box for the lyrics to go into, and getting the image i photoshopped to fit in the style of the app layout. After trying different styles, and resizing the image I was able to get the picture to flow with the layout of the app. 


## Directions for Future Development
In the future we will grow as we receive a round of funding so we can purchase API’s to Spotify and iTunes. Once we do this we will be able to play music from the songs selected. We will also be able to use newer API’s to have a more current selection of songs. We would also like to search for third-party applications that can highlight words as the music plays. Formatting the text in a way that has the appropriate breaks would also help the user follow along with the song. 

This will allow people to sing along as they read the lyrics. If people wanted the feature we could add a microphone so people can hear how bad they sound. People can join groups of other people who like the same songs. You would also like to partner with YouTube so users can load their signing videos for other people to see. The potential for this app is limitless. This will allow our users a better way to jam to lyrics!
Directions for Future Development

In the future we will grow as we receive a round of funding so we can purchase API’s to Spotify and iTunes. Once we do this we will be able to play music from the songs selected. We will also be able to use newer API’s to have a more current selection of songs. We would also like to search for third-party applications that can highlight words as the music plays. Formatting the text in a way that has the appropriate breaks would also help the user follow along with the song. 

This will allow people to sing along as they read the lyrics. If people wanted the feature we could add a microphone so people can hear how bad they sound. People can join groups of other people who like the same songs. You would also like to partner with YouTube so users can load their signing videos for other people to see. The potential for this app is limitless. This will allow our users a better way to jam to lyrics!

## App Usage

![Gif of App](images/ezgif.com-video-to-gif.gif)

## App & GitHub Link

GitHub Link:
https://github.com/specilaist/Lyric-Jam
Link to App:
https://specilaist.github.io/Lyric-Jam/
