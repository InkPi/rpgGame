// $(document).ready(function(){
//   let username = $('#name');
//   $('#buttonS').on('click', '.landing', function(){ //http://api.jquery.com/on/
//     let fighting= $('.fighting').append('body');
//     fighting.css("background-color", "white");
//   })
// });


$(document).ready(function() {
  const $landing = $('.landing'); //put in var to save memory
  const $fighting = $('.fighting');
  const $mapEx = $('.mapEx');

 $landing.show();
 $fighting.hide();
 $mapEx.hide();
  // let username = $('#name');

  $('#buttonS').on('click', function() { //http://api.jquery.com/on/
    /*Hiding everything but fighting*/
    $landing.hide();
    $mapEx.hide();
    $fighting.show();
    $("h1, input, #buttonS").remove();

    /*giving attributes to player + append*/
    //https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
    //had help with image src, couldn't find file from '../images/character.png'

    //https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
    /*player lvl 20
      player hp: 620 attk:43
      lvl 1 hp: 50,
      Every lvl hp += 30 after lvl1,
      lvl 1 attk: 5,
      Every lvl attk += 2 after lvl1*/
    let playerSide = $('<img>').attr('src', 'images/characterSide.png');
    playerSide.attr('class', 'playerSide');
    let playerAttk = $('#playerAttk');
    //https://api.jquery.com/data/
    $(playerSide).data('hp', 620);
    $(playerAttk).data('attk', 43);

   $('.playerDiv').append(playerSide);

/*Create different random monsters, random lvl, hp, + attack
  Hp + attack depend on level*/
  var bunny = $('<img>').attr('src', 'images/bunny.gif'); //only hp
  var mewmew = $('<img>').attr('src', 'images/mewmew.gif');
  var iceCream = $('<img>').attr('src', 'images/ice_creamMons.gif');
  var monsterArray = [bunny, mewmew, iceCream];
  var randomMonster = Math.floor(Math.random(monsterArray) * (2 - 0)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  $('.enemyDiv').append(monsterArray[randomMonster]);

  //Get enemy div block and append random monster img inside
  var enemyDivs = $('.enemyDiv');

  //Get p.monHp for enemy and give data hp, attk
  var enemyP = $('.monHp');
  $(enemyP).data('hp', 100).text(100); //can replace 100 w/ random# var
  $(enemyP).data('attk', 20);






  /* Player Attacks Enemy!! */
  $('#playerAttk').on('click', function(){
    var $this = $(this);
    /* math here */
    //keep decrement enemy hp by player attk

    // for (let i=43; i => 0; i++) {

    // get the enemy's hp
    const enemyHP = $(enemyP).data('hp');
    //get player's attk
    const playerDmg = $(playerAttk).data('attk');
    // do the math and minus hp with player attk
    var enemyHpDmg = enemyHP - playerDmg;// $() made it an obj!
    //text enemy left over pts and dialog
    $(enemyP).data('hp', enemyHpDmg).text(enemyHpDmg); //had help with this
    // enemyP.text(`${enemyHpDmg}`);

    //css movement from attack

    //hp bar when got attk down + exploring map if I have time
  // }

    //did var pdamage
    //Text when attack monster
    $(enemyHpDmg).each(function() {
        var enemyPara = $('.monPara');
        $(enemyPara).text('You attacked that cute monster! 43 attk pts');
    })

    //if damage=0 alert "won"
    //then reload the whole page
    if (enemyHpDmg <= 0) {
      window.alert('you won!'); //had to add window! Solved it!
      window.location.reload(true); //did this before but got it from: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    }

    //computer generate enemy attack now! return enemy attk func here

    // var $this = $(this);
    // if(this.data('clicked')) {
    //   console.log('enemy attk');
    // }
    if($this.data('clicked')) {
      $(enemyHpDmg).each(function() {
      console.log("atkk");
    })
    }
  });//player attk onclick


  /*Now Enemy Attacks Player!*/

  //random generated hp and attk

  //Minus player hp after player attacks: know it does something with if
   //https://stackoverflow.com/questions/6081608/jquery-check-if-it-is-clicked-or-not

  //css effect of attk
  //hp txt and dialog from attack



  });//button clicked




  //Exploration
      //let player = $('<img>').attr('src', 'images/character1.gif');
      //   $('.playerDiv').append(player);
  // const playerName = $('#name').innerHTML();

  //exploration link helps:
  /* http://jsfiddle.net/jakecigar/u2dtep5n/
  http://api.jquery.com/animate/ */
});
