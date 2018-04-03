/*
  All Images are borrowed from the internet. I do not own any of them.
*/

$(document).ready(() => {
  const $landing = $('.landing'); // put in var to save memory
  const $fighting = $('.fighting');
  const $mapEx = $('.mapEx');

  $landing.show();
  $fighting.hide();
  $mapEx.hide();


  $('#buttonS').on('click', () => { // http://api.jquery.com/on/
    /* Hiding everything but fighting */
    $landing.hide();
    $mapEx.show();
    $fighting.hide();
    /*

        Map Exploration

                              */

    const playerRunning = $('.characterRun');

    // player moving with key press arrows
    console.log('player running', playerRunning);


    // var playerRunningImg = playerRunning[0];
    $(document).keydown((event) => {
      /* Act on the event */
      // Had tons of help with this key press
      if (event.which === 37) {  //Arrow Left= 37
        const currentLeft = parseInt(playerRunning.css('left').slice(0, -2));
        // slice px
        // parstInt convert into integer
        // base 10 always: .slice(0, -2), 10) just because, because there's no error when removed, removed it
        // console.log(typeof currentLeft);
        playerRunning.css('left', currentLeft - 10);
      } else if (event.which === 38) { // Up Arrow
        const currentUp = parseInt(playerRunning.css('top').slice(0, -2));
        playerRunning.css('top', currentUp - 10);
      } else if (event.which === 39) { // Right Arrow
        const currentRight = parseInt(playerRunning.css('left').slice(0, -2));
        playerRunning.css('left', currentRight + 10);
      } else if (event.which === 40) { // Bottom Arrow
        const currentDown = parseInt(playerRunning.css('top').slice(0, -2));
        playerRunning.css('top', currentDown + 10);
      // top bottom clash
      }
    });
    // if position 0 can't move it
    // need collision detection but don't have time


        /*

          Fighting Scene

                           */
    // explore map> encountering monsters> show fighting scene
    // Set random seconds for fighting scene
    // their answer not what I wanted but able to adjust to use: https://stackoverflow.com/questions/29473159/set-random-number-and-then-randomly-decrease-it-every-5-second-until-it-reaches
    setInterval(() => {
      $fighting.show();
      $mapEx.hide();
    }, Math.floor(Math.random() * (7000 - 1000)));


    // retrieve username input and append it to player name heading text
    const username = $('.playerName');
    const getusername = $('#name');
    username.append(getusername.val()); // https://stackoverflow.com/questions/4088467/get-the-value-in-an-input-text-box


    $('h1, input, #buttonS').remove();



    //when I have time: (https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar)
    /* player lvl 20
      player hp: 620 attk:43
      lvl 1 hp: 50,
      Every lvl hp += 30 after lvl1,
      lvl 1 attk: 5,
      Every lvl attk += 2 after lvl1 */
    /* giving attributes to player + append */
    // had help with image src, couldn't find file from '../images/character.png'
    const playerSide = $('.playerSide');
    // $('<img>').attr('src', 'images/characterSide.png');
    // playerSide.attr('class', 'playerSide');
    const playerAttk = $('#playerAttk');
    // https://api.jquery.com/data/
    playerSide.data('hp', 620);
    playerAttk.data('attk', 43);


    $('.playerDiv').append(playerSide);

    /* Create different random monsters, random lvl, hp, + attack
  Hp + attack depend on level */
    //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
    const bunny = $('<img>').attr('src', 'images/bunny.gif'); // only hp
    const mewmew = $('<img>').attr('src', 'images/mewmew.gif');
    const iceCream = $('<img>').attr('src', 'images/ice_creamMons.gif');

    // set monster names, will not change
    const bunnyName = $('<h3>Pinwheel Bun Bun</h3>');
    const mewmewName = $('<h3>Mew Mew Sparkles</h3>');
    const iceCreamName = $('<h3>Cute Dessert Temptation</h3>');

    const monsterArray = [bunny, mewmew, iceCream];
    const randomMonster = Math.floor(Math.random(monsterArray) * (3 - 0)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    $('.enemyDiv').append(monsterArray[randomMonster]);


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


    // Get enemy div block and append random monster img inside
    const enemyDivs = $('.enemyDiv');


    // Get p.monHp for enemy and give data hp, attk
    const enemyP = $('.monHp');
    // http://api.jquery.com/text/
    enemyP.data('hp', 100).text(100); // can replace 100 w/ random# var
    enemyP.data('attk', 20);



    /* Player Attacks Enemy!! */
    // for loop?
    //had help with this
    const pattack = playerAttk.on('click', () => {
    /* math here */
    // keep decrement enemy hp by player attk

      // get the enemy's hp
      const enemyHP = enemyP.data('hp');
      // get player's attk
      const playerDmg = playerAttk.data('attk');
      // do the math and minus hp with player attk
      var enemyHpDmg = enemyHP - playerDmg;// $() made it an obj!
      // text enemy left over hp pts and dialog
      const enemyHPtext = enemyP.data('hp', enemyHpDmg).text(enemyHpDmg); // had help with this
      // Text when attack monster
      console.log(enemyHpDmg);
      const enemyPara = $('.monPara');
      // hp txt and dialog from attack
      enemyPara.text('You attacked that cute monster! 43 attk pts');
      enemyPara.show().text();


      // activate enemy turn after attacking

      // if damage=0 alert "won"
      // then reload the whole page
      if (enemyHpDmg <= 0) {
      // retain player hp
      // show expMap //hide .fighting
      // fade out enemy img
        window.alert('you are victorious and was able to overcome the creature\'s cuteness!'); // had to add window! Solved it!

        // reload enemy hp value for next fighting scene

        // can call var with method but not with action
        // = can't call by enemyHPtext
        enemyHpDmg = 100;
        enemyP.data('hp', enemyHpDmg).text(enemyHpDmg);


        $fighting.hide();
        $mapEx.show();
      }


      /* Now Enemy Attacks Player! */
      function enemyTurn() {
        // hide the enemy's dialogue text
        enemyPara.hide().text(); // http://api.jquery.com/animate/
        // player's hp
        const playerHp = playerSide.data('hp');
        // enemy attk pt
        const enemyAttk = enemyP.data('attk');
        // math
        // computer generate enemy attack now! return enemy attk func here
        const playerHpDmg = playerHp - enemyAttk;
        const hpScore = $('#hp');
        // text
        hpScore.data('hp', playerHpDmg).text(playerHpDmg); // text inside
        playerSide.data('hp', playerHpDmg); // .text(playerHpDmg)

        // animate css (left, right) on player Img
        // playerSide.playkeyframe(gothitP);


        // http://api.jquery.com/animate/
        // had quite a bit of help with this help!
        const playerMove = $('.playerSide');
        playerMove.addClass('playerMove');
        playerMove.animate({ // playerSide is an img
          // retrieve img
          // help!
          // left: "+=50", //this works but not quite what I want
          // right: "+=100"


          // "margin-left: 200px",
          // "margin-right: 400px"

        }, 'slow', () => {
          // get .playerPara
          const playerParagraph = $('.playerPara');
          // hp txt and dialog from attack
          playerParagraph.text("'Arg! I got attacked by this horrible enemy! 20 Damage points!'");
          playerParagraph.show().text(); // works!
          // after player attack, monster attack now, then player etc with each click
          playerParagraph.fadeOut(2500, 0).text(); // http://api.jquery.com/fadeout/
          // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_fadeout_fadein
        });


        if (playerHp === 0) {
          // http://api.jquery.com/animate/
          window.alert('you are dead!'); // had to add window! Solved it!
          location.reload();
          // https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
          // window.location.reload(true); //did this before but got it from: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
        }
      }// function enemyTurn()
      // enemyTurn's paragraph fadeout; // https://stackoverflow.com/questions/22424006/insert-delay-between-keypress-events-and-set-display-time?rq=1
      setTimeout(enemyTurn, 1700); // https://www.sitepoint.com/jquery-settimeout-function-examples/
    });// button clicked
  });
});
