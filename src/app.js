// $(document).ready(function(){
//   let username = $('#name');
//   $('#buttonS').on('click', '.landing', function(){ //http://api.jquery.com/on/
//     let fighting= $('.fighting').append('body');
//     fighting.css("background-color", "white");
//   })
// });


$(document).ready(function(){
  $('.landing').show();
  $('.fighting').hide();
  $('.mapEx').hide();
  // let username = $('#name');

  $('#buttonS').on('click', function() { //http://api.jquery.com/on/
    /*Hiding everything but fighting*/
    $('.landing').hide();
    $('.mapEx').hide();
    $('.fighting').show();
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
    playerSide.addClass('playerBack');
    playerSide.attr('hp', '620');
    playerSide.attr('attk', '43');
   $('.playerDiv').append(playerSide);

/*Create different random monsters, random lvl, hp, + attack
  Hp + attack depend on level*/
  var bunny = $('<img>').attr('src', 'images/bunny.gif');
  var mewmew = $('<img>').attr('src', 'images/mewmew.gif');
  var iceCream = $('<img>').attr('src', 'images/ice_creamMons.gif');
  var monsterArray = [bunny, mewmew, iceCream];
  var randomMonster = Math.floor(Math.random(monsterArray) * (2 - 0)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  $('.enemyDiv').append(monsterArray[randomMonster]);

  bunny.attr('hp', bunnyHP);
  bunny.attr('attk', bunnyAttk);
  var bunnyLvl = Math.floor(Math.random() * (2 - 0));

  //  function monsterLevel(min, max) {
  //     Math.floor(Math.random() * (max - min) + min); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  }
  // function monsterHP(min, max) {
  //     Math.floor(Math.random() * (max - min) + min);
  //  }
// for(let i=0; i<)

  });




  //Exploration
      //let player = $('<img>').attr('src', 'images/character1.gif');
      //   $('.playerDiv').append(player);
  // const playerName = $('#name').innerHTML();

  //exploration link helps:
  /* http://jsfiddle.net/jakecigar/u2dtep5n/
  http://api.jquery.com/animate/ */
});
