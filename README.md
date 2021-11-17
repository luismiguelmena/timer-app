# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run(for backend and public files):

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can see the code in the next repository: (https://github.com/luismiguelmena/timer-app.git)

As we can see we have two files (src and backend):

    - src: here is located the front of the app where there are some diferent files:
        - components: here I located some of the components for the app
        - services: call the endpoints of the backend
        - themes: located the two diferents themes of the app (light and dark)
        - utils: here I implemented the functions for the data treaty
        - App.tsx: principal code
    - backend: 
        - data:
        - src:
            - modules:
                - adapters: here is all the logic for the database (I have use a simply json that save the info, for having a database not so much complicated)
                - controllers: provides the data from the database
                - routes: the routes for calling in the front
            - types: diferent types used in the backend

I have done a simple style of the app using styled-components


