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

Include images of your wireframes. 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
1. Landing page (most important)
2. Fighting scene
3. Exploration
4. Potions (finding potions that can heal the player)
5. Exp (experience points for the user to level up (least important))

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

## POST MVP


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
    DOM: getting nodes and storing them to use them such as player.
    If/else statements for 
    Extends, constructor, super for same type enemies w/ diff stats(lvls, attack, and hp)
    .innerHTML change for hp level
    z-index for css
    ? Method for keeping score after restarting game
    Random floor, random math for enemy encounters and their stats
    For loop for highest score?

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Landing Page | H | 2hrs| So far 1hrs | hrs |
| Fighting Page | H | 6hrs| hrs | hrs |
| Exploration Page | H | 2shrs| hrs | hrs |
| Score Page | 2H | hrs| hrs | hrs |
| Potions Page | 4H | hrs| hrs | hrs |
| Total |  | hrs| hrs | hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
