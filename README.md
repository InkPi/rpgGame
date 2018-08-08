Published and Deployed Project View: https://inkpi.github.io/rpgGame/
SlideShow
https://1drv.ms/p/s!Alqa__6Qeq3XaNQTEW27aYu08b0

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
It's an RPG game (role playing game). It's about you, the character, having a phoebia
of cute stuff and kill all cute stuff you encountered.

## Wireframes

![wireframe image](/images/wireframe.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
1. Landing page (most important)
2. Fighting scene
3. Exploration
4. Media Query View
5. Potions (finding potions that can heal the player)
6. Exp (experience points for the user to level up (least important))

## Game Components

### Landing Page
What will a player see when they start your game?
- Page's title asking for your name and a button to start the game.

### Game Initialization
What will a player see when the game is started? 
- a fighting scene, if I don't have time to create other scenes.
- exploration map, if I have time, and encounter random cute monsters

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam
-User encounter various cute enemies and need to exterminate as much as possible. He 
has a set level and hp. Enemies are various levels and hp but generally user is stronger.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?
Game ends when user's hp reached 0. Show status of how many killed afterwards.

### Game Reset
How will the user restart the game once it has been completed.
There will be a button at the end that says "restart?" How do I restart while keeping
score?

## MVP 

Include the full list of features that will be part of your MVP
1. Landing Page :
    Input Name
    Start Button to start game

2. Fighting scene : 
    Enemy would be random
3. Able to restart game after ending

## POST MVP
1. Exploring Map:
    Player run around map, encountering enemies by leading to fighting scene
2. Keeping Score of Player's kill and keep in storage forever

Include the full list of features that you are considering for POST MVP
## Functional Components
1. Exploration Map : 
    User explore map. Encounter random enemies.
2. Status Score page :
    Keep score while being able to restart
    Highest score on top
3. Potions : User, by 50% chance, get potion from defeating monsters
4. Experience points: User gains experience points from defeating monsters.
    Experience points differ from monster and levels.
    Enough points let you level up.



Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 
    Multiple functions.
    JQuery DOM: getting nodes and storing them to use them such as player.
    CSS transition/ animations
    If/else statements for 
    Extends, constructor, super for same type enemies w/ diff stats(lvls, attack, and hp)
    .innerHTML change for hp level
    z-index for css
    ? Method for keeping score after restarting game
    Random floor, random math for enemy encounters and their stats
    For loop for highest score?

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Landing Page | H | 2hrs| 4hrs | 4hrs |
| Fighting Page | H | 9hrs| 20hrs | 20hrs |
| Exploration Page | H | 4hrs| 13hrs | 13hrs |
| Total |  | 15hrs| 37hrs | 37hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| ()=> | in place of an empty nameless function |  
| show() | shows whatever object I assigned this to |  
| hide() | hides whatever object I assigned this to | 
| css() | allow css styling effect to be added via jQuery | 
| append | add something to the html dom via jQuery | 
| data() | add a data property and value. Property can be named whatever | 
| addClass() | add class | 
| animate() | run an animation | 
| alert | give a popup alert window box | 
| location.reload() | reload the whole file to the beginning | 

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 
 How to give a jquery click event:
 http://api.jquery.com/on/
 Get landing page text box input value to then append it:
 https://stackoverflow.com/questions/4088467/get-the-value-in-an-input-text-box
 Assigning data properties and values, then accessing and using them:
 https://api.jquery.com/data/
 Creating an element and setting attribute to them:
 https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
 Randomize to one image out of different images with a div placed in a certain area:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 Getting text from an element:
 http://api.jquery.com/text/
 Creating animation Effect:
 http://api.jquery.com/animate/
 Disappearing elements (help give effect of ai's turn):
 http://api.jquery.com/fadeout/
 // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_fadeout_fadein
 Refreshing or reloading a page:
 https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
 Give duration to when an element will be played:
 https://www.sitepoint.com/jquery-settimeout-function-examples/

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. 
if/else statement of when a random monster image shows up on the screen, have the correct name of the monster in text form above the image.
    // append monster's name to right random monster img
    const monsterNameAppend = $('.monsterName');
    // monsterNameAppend.append(bunnyName)
    if (randomMonster === 0) { // played around got it solved myself
      // Not sure why this way doesn't work too: monsterArray[randomMonster] === monsterArray[0]
      monsterNameAppend.append(bunnyName);
    } else if (randomMonster === 1) {
      monsterNameAppend.append(mewmewName);
    } else if (randomMonster === 2) {
      monsterNameAppend.append(iceCreamName);
    }

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.
.keydown()
.which === 37 //37 stands for left arrow key
.show()
.hide()
.data()
.fadeOut()
setTimeout

## Change Log
 Section to document what changes were made and the reasoning behind those changes.
 To crop out part of image I don't need:
 Change from creating a image tag via jQuery for player and putting it into a body type div to creating another div inside that div
 and css style a background image url to it.

## Issues and Resolutions
 Exploring Page: 
 1. Attack turns for player and computer: setTimeOut and fadeOut
 2. Git cropping: cropped through photoshop though its terrible
 3. Decreasing value and resetting: data()
 4. Setting correct name to random monster image: if/else statement and replace value at the end and reappend it
 5. Moving the image around: pasrseInt(had help)
