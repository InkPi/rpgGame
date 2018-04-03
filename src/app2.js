// $(document).ready(function(){
//   let username = $('#name');
//   $('#buttonS').on('click', '.landing', function(){ //http://api.jquery.com/on/
//     let fighting= $('.fighting').append('body');
//     fighting.css("background-color", "white");
//   })
// });


$(document).ready(() => {
  const $landing = $('.landing'); // put in var to save memory
  const $fighting = $('.fighting');
  const $mapEx = $('.mapEx');

  $landing.show();
  $fighting.hide();
  $mapEx.hide();
  // let username = $('#name');

  $('#buttonS').on('click', () => { // http://api.jquery.com/on/
    /* Hiding everything but fighting */
    $landing.hide();
    $mapEx.hide();
    $fighting.show();
    $('h1, input, #buttonS').remove();

    /* giving attributes to player + append */
    // https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
    // had help with image src, couldn't find file from '../images/character.png'

    // https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar
    /* player lvl 20
      player hp: 620 attk:43
      lvl 1 hp: 50,
      Every lvl hp += 30 after lvl1,
      lvl 1 attk: 5,
      Every lvl attk += 2 after lvl1 */
    const playerSide = $('<img>').attr('src', 'images/characterSide.png');
    playerSide.attr('class', 'playerSide');
    const playerAttk = $('#playerAttk');
    // https://api.jquery.com/data/
    $(playerSide).data('hp', 620);
    $(playerAttk).data('attk', 43);

    $('.playerDiv').append(playerSide);

    /* Create different random monsters, random lvl, hp, + attack
  Hp + attack depend on level */
    const bunny = $('<img>').attr('src', 'images/bunny.gif'); // only hp
    const mewmew = $('<img>').attr('src', 'images/mewmew.gif');
    const iceCream = $('<img>').attr('src', 'images/ice_creamMons.gif');
    const monsterArray = [bunny, mewmew, iceCream];
    const randomMonster = Math.floor(Math.random(monsterArray) * (2 - 0)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    $('.enemyDiv').append(monsterArray[randomMonster]);

    // Get enemy div block and append random monster img inside
    const enemyDivs = $('.enemyDiv');
    $(enemyDivs).append(randomMonster);

    // Get p.monHp for enemy and give data hp, attk
    const enemyP = $('.monHp');
    $(enemyP).data('hp', 100);
    $(enemyP).data('attk', 20);


    /* Player Attacks Enemy!! */
    $('#playerAttk').on('click', () => {
    /* math here */
    // keep decrement enemy hp by player attk
      for (let i = 43; i => 0; i++) {
        // get the enemy's hp
        const enemyHP = $(enemyP).data('hp');
        // get player's attk
        const playerDmg = $(playerAttk).data('attk');
        // do the math and minus hp with player attk
        const enemyHpDmg = enemyHP - playerDmg;// $() made it an obj!
        enemyP.append(`${enemyHpDmg}`);
      }

      // var playerDmg =  $('.playerDiv').text($(playerAttk).attr('data-attk'));


      // $('.monHp').append(enemyDivs);
      return enemyP;


      console.log(enemyP); // did var pdamage
    // pdamage.append('.enemyDiv .hp').innerHTML;
    });


  // bunny.attr('hp', bunnyHP);
  // bunny.attr('attk', bunnyAttk);
  // var bunnyLvl = Math.floor(Math.random() * (2 - 0));

  //  function monsterLevel(min, max) {
  //     Math.floor(Math.random() * (max - min) + min); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  }
  // function monsterHP(min, max) {
  //     Math.floor(Math.random() * (max - min) + min);
  //  }
    // for(let i=0; i<)
  });


  // Exploration
  // let player = $('<img>').attr('src', 'images/character1.gif');
  //   $('.playerDiv').append(player);
  // const playerName = $('#name').innerHTML();

  // exploration link helps:
  /* http://jsfiddle.net/jakecigar/u2dtep5n/
  http://api.jquery.com/animate/ */
});
