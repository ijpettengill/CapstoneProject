Adopt-A-Pet - Capstone Project
Find cute and smart pets to play with you
Link:

https://www.Adopt-A-Pet.net/

Adopt-A-Pet:
All in one place, all users on this site will have the opportunity to find the best companion.

Is a pet adoption website to help the customer find the pet they are looking for. With an easy UI. Adopt-A-Pet uses a real-time API that brings information about pets available to be adopted.

Features
Display a list of pets of different types that are available to be adopted.
Display a range of pet organization information
Users can save their favorite pets that they like
Users can leave a comment for pets
Users can see recent pet's view
Users can search for a pet using a location, City, State, or Zip Code
API
PetFinder For Developers

Link:

https://www.petfinder.com/developers/v2/docs/
Technology Use
ReactJS
JavaScript
PostgreSQL
Nginx
Ubuntu 22.04.1 LTS
To Run The Project Local
Get a API TOKEN and API SECRET KEY from https://www.petfinder.com/developers/v2/docs/

run capstone.sql file

psql < capstone.sql
With the Database created you need to update "config table" with the API TOKEN and SECRET KEY

INSERT INTO config (api_key, secret_key, api_token) VALUES ('API TOKEN', 'API SECRET KEY', 'dont change this field');
Backend Folder

Run in the Console
- npm install
This will install all the backend package.json dependencies Then:

Run in the Console
- nodemon server.js 
(if you don't have nodemon use what you use to run the server)
Frontend Folder

Run in the Console
- npm install
This will install all the frontend package.json dependencies Then:

Run in the Console
- npm start
- 
API Link:
https://www.petfinder.com/developers/v2/docs/