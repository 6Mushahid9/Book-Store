# Notes
## This file will contains notes regaurding terminal and notes about perticular file will be inside that file

* in backend terminal write npm init to create project
* add "type" : "module" in package. json
* install express nodemon 
* remove test from script section and add - "start":"node index.js",
                                            "dev":"nodemon index.js"
* create index.js (entrypoint) 
* create DB and save its url, install mongoose 
* once DB is connected and server is running, create moongoose model                                    
* to create routes, import express and create an instance of express.Router()
* write all routes in seperate folder + remember to export them 
* to connect frontend and beckend we need to setup CORS

## For frontend (using vite + tailwind)

* type  npm create vite@latest to make frontend folder
* run npm i in frontend directory
* to add tailwind, use code from its official site
* delete app.css,remove everything from app.jsx, replace code of index.css with code given on site, update tailwind.config.js
* "es7+" extention will help to use "rafce" shortcut to create boiler plate
* we want our app to be single paged so install react-router-dom, then: write import {BrowserRouter} from "react-router-dom" in main.jsx and surround <App /> with BrowseRouter 
* install axios to send http requests and react-icons for icons