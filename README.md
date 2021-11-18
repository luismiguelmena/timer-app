# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

For compiling the app run:

### `yarn`

or

### `npm i`

In the project directory, you can run(for backend and public files):

### `yarn start`

or

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs the backend in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

You can see the code in the next repository: (https://github.com/luismiguelmena/timer-app.git)

## Description

As we can see we have two files (src and backend):

    - src: here is located the front of the app where there are some diferent files:
        - components: here I located some of the components for the app
        - services: call the endpoints of the backend
        - themes: located the two diferents themes of the app (light and dark)
        - utils: here I implemented the functions for the data treaty
        - App.tsx: principal code
    - server: 
        - data: Json where the time is going to be acumulated
        - src:
            - index.js: principal config for the backend
            - modules:
                - adapters: here is all the logic for the database (I have use a simply json that save the info, for having a database not so much complicated)
                - controllers: provides the data from the database
                - routes: the routes for calling in the front
            - types: diferent types used in the backend

I have done a simple style of the app using styled-components

For futures developments I should do a register/login for acumulated only the time for the user.
Other features could be add new buttons with new functionalities.

## Conclusion 

This app is a god way to know the knowledge of a person about code, but the real way to know how a person works and unwind in diferent enviroments is day by day.
The exercise is simple and easy, I think is a good work not like others application that ask for a really big exercise.




