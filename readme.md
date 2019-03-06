This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a README.md file.


Include screenshots (or a GIF/Video) of the typical user flow of your application. Make sure to include the use of Spotify, Bands in Town, and OMDB.
Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.
Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.


If you haven't written a markdown file yet, click here for a rundown, or just take a look at the raw file of these instructions.

This is my awesome LIRI node project. LIRI is an acronymn for Language Interpretation and Recognition Interface and is a version of a Command Line Interface. This means that it has been set up to take in a command given by the user and render the appropriate information. Specifically, my LIRI app is programmed to search for information about concerts, songs, or movies specific to the search information given by the user. To demonstrate how it works let's run the searches. 

1. In the first search the user looks for concert information regarding the rap artist Lecrae.

    ![image](https://user-images.githubusercontent.com/44686220/53839318-19893e80-3f4c-11e9-86be-68836f4804eb.png)

    As you can see in the image below, the code returns the date, venue, and location of the artist's next 5 concerts.

    ![image](https://user-images.githubusercontent.com/44686220/53840022-d8922980-3f4d-11e9-9514-d63ce6f8c6c6.png)

2. The user can then search for the information about a song by entering the command spotify-this. The app will use process.argv to find the command spotify-this and then search for any string that follows this command, as seen below:

    ![image](https://user-images.githubusercontent.com/44686220/53845748-282d2100-3f5f-11e9-8e24-f26bbd6d53f9.png)

    If the user enters spotify-this in the second index of the array, but then enters no information after that, the app will conduct a default search of "I Saw the Sign."

    ![image](https://user-images.githubusercontent.com/44686220/53846002-26b02880-3f60-11e9-88ba-ed9d0683511a.png)

3. The third search that the liri app can conduct is for information regarding a movie. Again the app uses process.argv to get the command  movie-this. When it recieves the command movie-this it will grab data for any title entered by the user. If no movie title is entered by the user the app will conduct a default search for the movie Mr. Nobody. This is reflected in the following two images.

    ![image](https://user-images.githubusercontent.com/44686220/53846448-cf12bc80-3f61-11e9-8265-607a603464e3.png)
    ![image](https://user-images.githubusercontent.com/44686220/53846489-f79ab680-3f61-11e9-9fee-306cac311f9e.png)

4. Lastly, the app has the capacity to take in the command do-what-it-says. When this happens it accessess information contained within another file in the same folder. To import this information the code contains a fs.readfile function which contains the file path and the data formatting instructions. In this case, the imported information is a song so I ran the spotifyIt function on this data, as seen below.

    ![image](https://user-images.githubusercontent.com/44686220/53846870-6af0f800-3f63-11e9-8987-ef211c823886.png)







