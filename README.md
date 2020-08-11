# Road to Nowhere #

**Description:** This app shows a semi-random image of a map, using Google Maps Static API. The user then enters a guess for the location (city and state) and then can see the right answer. Made with [Gatsby](http://gatsbyjs.org) in July, 2020, and deployed with [Netlify](https://netlify.com) here: https://road-to-nowhere.netlify.app/

## How to Run Locally ##

* Download the repo.
* Run `npm install` in the root of the project.
* If you haven't already, install the Gatsby CLI on your machine. `npm install -g gatsby-cli`.
* Create `.env.development` and `.env.production` files in the root directory. In each of these files, simply add:
```
GATSBY_MAPQUEST_KEY=<YOUR_API_KEY_HERE>
```
See the next section for info on the key and API usage.
* In the project, run `gatsby develop`, which will run a local instance of the project at http://localhost:8000.

## API Usage ##

This project uses the [MapQuest API](https://developer.mapquest.com/documentation/static-map-api/v5/), to generate the images of the maps. To get the API key, you'll need to register with MapQuest, which is free. MapQuest has a good, free tier for their API services.

Another option is to use the [Google Maps Static API](https://developers.google.com/maps/documentation/maps-static/intro), which provides an almost identical service. This API loads faster than MapQuest, however Google's version shows ownership on the image, which usually gives away the location. So road maps are better for this task. To use this, simply change the map URL in the `pages/index.js` file to match Google's information.

## Deployment ##

This app is currently deployed to Netlify here: https://road-to-nowhere.netlify.app/

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
  - Road or Sat view
  - Details included (Can't really add too many)
  - Which datasets to include (Several in the project, but easy to add more with list of coordinates). Also, currently using US locations only, since guesses are made based on states. How to change to guess cities, states, countries, etc.?
