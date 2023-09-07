I. Introduction
I wanted to create a simple application that would be useful to people but allow me to develop my own Schema and create a CRUD route from this Schema.

    Check-List:
    Clone Down MERN-Infrustucture from GitHub
        Check package.json to make sure that all needed dependencies are there
        Change proxy and name in package.json
        Add .env and add SECRET and DATABASE_URL
        add .gitignore and make sure that node_nodules and .env are inside
        run npm build
    Set up Components
    Set up Pages
    Set Up and Chack back end functions
        Set up and export Schema
        Set up CRUD routes in routes folder with try catch
        Set up app.use for habit routes in server.js
        Connect to Mongo DB database and check for connection
        Use Thunder Client to ensure that all backend CRUD routes work
    Set up and check Client Side

II. Teachnologies Used
Technologies used included:
React
React-Router-Dom
useState, useEffect, useNavigate
MongoDB
Mongoose
Axios
CRUD Routes

III. Getting Started
Getting started I made sure to map out what needed to be imported on as much as possible on the App.js page and pass it down to the components that needed to use it. This allowed me to reuse data gotten only one time. I did hit snags on when passing down and accessing my data (either it would be in an object or I couldn't get the correct pathway to the route). I was able to work through these issues with the help of my instructors and some of other memebers of my cohort.

IV. Unsolved Problems
I am currently having problems with the edit route posting.
I am also having glitches with the New page not redirecting back to the main page after form submission.
I am also having problems getting a turinary operarot to change the emoji from red to green once the client has checked the complete check box and updated to the task.

V. Future Enchancements
At the current moment I can't think of any extra features I would add. However, I would like to keep working on the client side to make sure all current features are working as smoothly as possible and don't cause any future problems.
