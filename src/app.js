/*
  All Images are borrowed from the internet. I do not own any of them.
*/

$(document).ready(function() {
  const $landing = $('.landing'); //put in var to save memory
  const $fighting = $('.fighting');
  const $mapEx = $('.mapEx');

  $landing.show();
  $fighting.hide();
  $mapEx.hide();



  $('#buttonS').on('click', function() { //http://api.jquery.com/on/
    /*Hiding everything but fighting*/
    $landing.hide();
    $mapEx.show();
    $fighting.hide();
    /*
switch()
        Map Exploration

                              */

    var playerRunning = $('.characterRun');

        //player moving with key press arrows
    console.log('player running',playerRunning);


    // var playerRunningImg = playerRunning[0];
    $(document).keydown(function(event) {
      /* Act on the event */
     if(event.which===37){ //Had help //Arrow Left= 37
      const currentLeft = parseInt(playerRunning.css('left').slice(0, -2));
      //slice px
      //parstInt convert into integer
      //base 10 always: .slice(0, -2), 10) just because, because there's no error when removed, removed it
      //console.log(typeof currentLeft);
      playerRunning.css('left', currentLeft - 10);
      } else if(event.which===38){ //Up Arrow
      const currentUp = parseInt(playerRunning.css('top').slice(0, -2));
      playerRunning.css('top', currentUp - 10);
      } else if(event.which===39) {//Right Arrow
      const currentRight = parseInt(playerRunning.css('left').slice(0, -2));
      playerRunning.css('left', currentRight + 10);
      } else if(event.which===40) {//Bottom Arrow
      const currentDown = parseInt(playerRunning.css('top').slice(0, -2));
      playerRunning.css('top', currentDown + 10);
      //top bottom clash
      }
      // switch (move.which)
    });
    //if position 0 can't move it
    //need collision detection but don't have time

    //Set random seconds for fighting scene
    //their answer not what I wanted but abl to adjust to use: https://stackoverflow.com/questions/29473159/set-random-number-and-then-randomly-decrease-it-every-5-second-until-it-reaches
    setInterval(function(){
      $fighting.show();
      $mapEx.hide();
    }, Math.floor(Math.random() * (7000 - 1000)));


    //probably what I would want for encountering monsters> show fighting scene
    //https://stackoverflow.com/questions/22424006/insert-delay-between-keypress-events-and-set-display-time?rq=1


    /*

          Fighting Scene

                           */
    //retrieve username input and append it to player name heading text
    let username = $('.playerName');
    let getusername = $('#name');
    username.append(getusername.val()); //https://stackoverflow.com/questions/4088467/get-the-value-in-an-input-text-box


    $("h1, input, #buttonS").remove();

    /*giving attributes to player + append*/
    //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery

    //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
    /*player lvl 20
      player hp: 620 attk:43
      lvl 1 hp: 50,
      Every lvl hp += 30 after lvl1,
      lvl 1 attk: 5,
      Every lvl attk += 2 after lvl1*/
    //had help with image src, couldn't find file from '../images/character.png'
    let playerSide = $('.playerSide');
    //$('<img>').attr('src', 'images/characterSide.png');
    // playerSide.attr('class', 'playerSide');
    let playerAttk = $('#playerAttk');
    //https://api.jquery.com/data/
    playerSide.data('hp', 620);
    playerAttk.data('attk', 43);


   $('.playerDiv').append(playerSide);

/*Create different random monsters, random lvl, hp, + attack
  Hp + attack depend on level*/
  var bunny = $('<img>').attr('src', 'images/bunny.gif'); //only hp
  var mewmew = $('<img>').attr('src', 'images/mewmew.gif');
  var iceCream = $('<img>').attr('src', 'images/ice_creamMons.gif');

  //if mew mew

  var bunnyName = $('<h3>Pinwheel Bun Bun</h3>');
  var mewmewName = $('<h3>Mew Mew Sparkles</h3>');
  var iceCreamName = $('<h3>Cute Dessert Temptation</h3>');

  var monsterArray = [bunny, mewmew, iceCream];
  var randomMonster = Math.floor(Math.random(monsterArray) * (3 - 0)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  $('.enemyDiv').append(monsterArray[randomMonster]);


//append monster's name to right random monster img
var monsterNameAppend = $('.monsterName');
// monsterNameAppend.append(bunnyName)
if(randomMonster === 0) { //played around got it solved myself
//Not sure why this way doesn't work too: monsterArray[randomMonster] === monsterArray[0]
  monsterNameAppend.append(bunnyName);
} else if(randomMonster === 1) {
  monsterNameAppend.append(mewmewName);
} else if(randomMonster === 2) {
  monsterNameAppend.append(iceCreamName);
}

  // monsterNameAppend.prepend(monsterName[randomName]);

  //Get enemy div block and append random monster img inside
  var enemyDivs = $('.enemyDiv');


  //Get p.monHp for enemy and give data hp, attk
  var enemyP = $('.monHp');
  //http://api.jquery.com/text/
  enemyP.data('hp', 100).text(100); //can replace 100 w/ random# var
  enemyP.data('attk', 20);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find




  /* Player Attacks Enemy!! */
  //for loop?
  // for(let i = 100; i <= 0; i-= 43) {
  var pattack = playerAttk.on('click', function(){
    //playerParagraph.hide().text();
    /* math here */
    //keep decrement enemy hp by player attk
    enemyHpDmg=100;

    // get the enemy's hp
    let enemyHP = enemyP.data('hp');
    //get player's attk
    const playerDmg = playerAttk.data('attk');
    // do the math and minus hp with player attk
    var enemyHpDmg = enemyHP - playerDmg;// $() made it an obj!
    //text enemy left over hp pts and dialog
    var enemyHPtext = enemyP.data('hp', enemyHpDmg).text(enemyHpDmg); //had help with this
    //Text when attack monster
    console.log(enemyHpDmg);
    let enemyPara = $('.monPara');
    //hp txt and dialog from attack
    enemyPara.text('You attacked that cute monster! 43 attk pts');
    enemyPara.show().text(); //http://api.jquery.com/animate/

    //css movement from attack help!
    //this doesn't work! doesn't work, broke it
    //playerSide.trigger();

    //hp bar when got attk down + exploring map if I have time

    //activate enemy turn after attacking

    //if damage=0 alert "won"
    //then reload the whole page
    if (enemyHpDmg <= 0) {
      //retain player hp
      //show expMap //hide .fighting
      //fade out enemy img
      window.alert('you are victorious and was able to overcome the creature\'s cuteness!'); //had to add window! Solved it!

      //reload enemy hp value for next fighting scene

      //can call var with method but not with action
      // = can't call by enemyHPtext
      nemyHpDmg=100;
      enemyP.data('hp', enemyHpDmg).text(enemyHpDmg);


      $fighting.hide();
      $mapEx.show();

    }





/*Now Enemy Attacks Player!*/
function enemyTurn() {
    //hide the enemy's dialogue text
    //help makes it not show 2nd time!
    enemyPara.hide().text(); //http://api.jquery.com/animate/
    //player's hp
    let playerHp = playerSide.data('hp');
    //enemy attk pt
    let enemyAttk = enemyP.data('attk');
    //math
    //computer generate enemy attack now! return enemy attk func here
    const playerHpDmg = playerHp - enemyAttk;
        let hpScore = $('#hp');
        //text
        hpScore.data('hp', playerHpDmg).text(playerHpDmg); //text inside
        playerSide.data('hp', playerHpDmg); //.text(playerHpDmg)

        //animate css (left, right) on player Img
        // playerSide.playkeyframe(gothitP);


        //http://api.jquery.com/animate/
        //help!
        let playerMove = $('.playerSide');
        playerMove.addClass('playerMove');
        playerMove.animate({ //playerSide is an img
          //retrieve img
          //help!
          // left: "+=50", //this works but not quite what I want
          // right: "+=100"

          //had quite a bit of help with this help!

          // "margin-left: 200px",
          // "margin-right: 400px"

        }, "slow", function() {
          //get .playerPara
          let playerParagraph = $('.playerPara');
          //hp txt and dialog from attack
          playerParagraph.text("'Arg! I got attacked by this horrible enemy! 20 Damage points!'");
          playerParagraph.show().text(); //works!
          //after player attack, monster attack now, then player etc with each click
          playerParagraph.fadeOut(2500, 0).text(); //http://api.jquery.com/fadeout/
          //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_fadeout_fadein


        });


        if (playerHp === 0) {
          //http://api.jquery.com/animate/
          window.alert('you are dead!'); //had to add window! Solved it!
          location.reload();
          //https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
          // window.location.reload(true); //did this before but got it from: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
        }


    }//function enemyTurn()
  //enemyTurn's paragraph fadeout;
  setTimeout(enemyTurn, 1700); //https://www.sitepoint.com/jquery-settimeout-function-examples/



  });//button clicked


});
});
