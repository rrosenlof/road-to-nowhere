# Road to Nowhere #

**Description:** This app shows a semi-random image of a map, using Google Maps Static API. The user then enters a guess for the location (city and state) and then can see the right answer. Made with [Gatsby](http://gatsbyjs.org) in July, 2020. A work in progress!

## How to Run Locally ##

1. Download the repo.
1. Run `npm install` in the root of the project.
1. If you haven't already, install the Gatsby CLI on your machine. `npm install -g gatsby-cli`.
1. Create `.env.development` and `.env.production` files in the root directory. In each of these files, simply add: 
```
MAPQUEST_KEY=<YOUR_API_KEY_HERE>
MAPQUEST_API_URL=https://www.mapquestapi.com/staticmap/v5/map
```
See the next section for info on the key and API usage.
1. In the project, run `gatsby develop`, which will run a local instance of the project at http://localhost:8000.

## API Usage ##

This project uses the [MapQuest API](https://developer.mapquest.com/documentation/static-map-api/v5/), to generate the images of the maps. To get the API key, you'll need to register with MapQuest, which is free. MapQuest has a good, free tier for their API services.

Another option is to use the [Google Maps Static API](https://developers.google.com/maps/documentation/maps-static/intro), which provides an almost identical service. This API loads faster than MapQuest, however Google's version shows ownership on the image, which usually gives away the location. So road maps are better for this task. To use this, simply change the `MAPQUEST_API_URL` and key variables in the `.env` files to match Google's information.

## Deployment ##

Gatsby projects are normally super easy to deploy on a variety of platforms: AWS S3, Firebase, Heroku, Surge, and Gatsby's new Gatsby Cloud service for example. However, I could not for the life of me figure out how to deploy this app with the environment variables for the API key. So if you try this and find a way, let me know!!

## Next Steps ##

A to do list:
- Think of a better name for the project? This works though...
- Improve the gameplay UX
  - Use the Google Autocomplete for entering guesses for location
  - Click on a map for your guess (à la Geoguessr)
  - Keep track of a score
  - Change unlimited play to a set of questions
- More styles? Colors?
- Allow users to change settings they play with:
  - Zoom level
  - Details included (Can't really add too many)
  - Which datasets to include (Two in the project, but easy to add more with list of coordinates)
