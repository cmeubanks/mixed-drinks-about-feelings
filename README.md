# Mixed Drinks About Feelings 
[View Live Application Here](https://mixeddrinksaboutfeelings.herokuapp.com/)

## Table of Contents
* [Description](#description)
* [Learning Goals](#LearningGoals)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)
* [Demos](#demos)

## Description

Calling all beverage (and even non-beverage) enthusiasts. Are you tired of asking the bartender, "What's your best cocktail?". Do you often times find yourself searching for drink inspiration? You've come to the right place! Our application provides a drink reccomendation based on your mood. Users can also favorite a drink to save for later should they like the recommendation.

## Learning Goals

For this project, I was challenged to construct a MVP to the meet the needs of a niche audience, and implement the following learning goals (in 6 days!):

- React
- Router
- Asynchronous JavaScript
- End to end testing with Cypress

*Minimum Viable Product (MVP)*:  Application reccomends a drink based on a user's emotion. The user can input their emotion and a drink is reccomended. User can favortie their reccomended drink and it is added to a favorite's page.

User Personas: 

https://docs.google.com/document/d/1ozdKCzlF1FDsmvqbA4b-h7gz2u9-fgVNnvJ0m5ZTUFY/edit?usp=sharing
https://docs.google.com/document/d/1c5JSCzOKStRWSLuFhrgALXNLqbehTxvsVqpm5CafQ_Y/edit?usp=sharing


## Notable Features

- Data fetched from CocktailBD API: https://www.thecocktaildb.com/api.php?ref=apilist.fun
- Cypress Testing
- React Class & Functional Components
- React Router for Navigation aid
- Proptypes


## Installation

* The application is deployed to Heroku, to view the live application: https://mixeddrinksaboutfeelings.herokuapp.com/

* To view the application on your local device:

1. Clone down this application
2. Enter `npm i` in your terminal
3. Enter `npm start` in your terminal
4. To view cypress tests open separate tab an enter `npm run cypress`


## Walkthrough

1) To utilize the application, select your mood from the form input (which you see on page load). 
2) Click the "get drink" button once you have input your mood
3) A drink reccomendation will display based on your mood
4) If you like the reccomendation, click the 'favorite' button
5) To view your favorited drinks, select the 'Favorites' navigation button


## Authors
<table>
    <tr>
        <td> Caroline Eubanks <a href="https://github.com/cmeubanks">GH</td>
    </tr>
    <tr>
        <td><img src="https://avatars.githubusercontent.com/u/73092355?v=4" alt="C. Eubanks" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>JavaScript</td>
        <td>React</td>
        <td>React Router</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>SASS</td>
        <td>Cypress</td>
        <td>Heroku</td>
    </tr>
    </tr>
        <td><img src="https://user-images.githubusercontent.com/73092355/119360616-074c6580-bc68-11eb-8ac1-f1ca05b87bf8.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361040-74f89180-bc68-11eb-845a-29ec9f93f095.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361186-9d808b80-bc68-11eb-97ee-05bde2700716.png" alt="react router" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402191-d553f700-bc99-11eb-8cd3-6ef44023d530.png" alt="HTML" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402395-1e0bb000-bc9a-11eb-9173-30403b8848d1.png" alt="css" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119351057-49bc7500-bc5d-11eb-9e74-24ede01707c4.png" alt="SASS" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361263-b5f0a600-bc68-11eb-9f41-8e10aa013e7a.png" alt="Cypress" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402483-3bd91500-bc9a-11eb-9465-edf38b6a68d3.png" alt="Heroku" width="100" height="auto" /></td>
    </tr>
</table>

## Demos

* Application in Use
![](https://media.giphy.com/media/8H26NzJy8uZArSj0nd/giphy.gif)

* Favoriting
![](https://media.giphy.com/media/NeSjWqZ1VhCU2d9dls/giphy.gif)
