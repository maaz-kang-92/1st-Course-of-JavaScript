// 1. Create two variables firstCart and secondCard....
                             //initilize values into the startGame() function.......
//    Set their values to a random number between 2-11....
let firstCard;                                 //let firstCart = 5   before calling the getRandomCard(2, 12)
//fix the value of one card otherwise you never got blackjack (my personl oppion..)
let secondCard;                               //getRandomCard(2, 12)  before calling the getRandomCard(2, 12)

//1.solving our cards problem with an Array...... will store the sum of all Cards in a variable......
let cards = []

//2.  Create a variable, sum and set it to the sum of the tow cards....
let sum = firstCard + secondCard


let hasBlackJack = false        //when the value equal to 21....
let isAlive = false              //here man is not playing the game yet.......

//declare a vaiable called message and assign its value to an empty string...
let message = ""

// ...............................................................................
//1. Store the message-el paragraph in a variable called messageEl.....
    let messageEl = document.getElementById("message-el")

//2. Render the sum on the page using this format "Sum: 14".....
//  let sumEl = document.getElementByid("sum-el");
    let sumEl = document.querySelector("#sum-el")     //qS works as gEBi works but in qS we have to tell is this id(#) or class(.) element or use just element like body, h1 or h2. qS works like CSS taking elements of html...... 

//3. Render the cards on the page using this format "Cards: 10 4"
    let cardsEl = document.getElementById("cards-el")

//4. Add new Card....
    let newcard = document.getElementById("new-btn")

   
    
     let playerEl = document.getElementById("player-el");
//5. Add player-name and money chip....
    // let playerName = "maaz"
    // let playerChip = 143
    // playerEl.textContent = playerName + ": $" + playerChip;

//6. Add player_name and money chip through object....
// Appling Methods on object....... 

    let playerObject = {
     name: "maaz: ", 
     amount: 143,
           
    }
    playerEl.textContent = playerObject.name + "$"+ playerObject.amount;

//3. Create a startGame() function, for calling the renderGame function. click into start button. first two cards check in this function....
function startGame() {
  
  isAlive = true                     //there is true because i'm playing now......
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
   
  renderGame()
}





// 1. Create a renderGame() function, Move the conditional
// below inside the body of the function....
function renderGame() {
    if (sum <= 20) { 
      message = "Do you want to draw a new card? "    // you are still in game..
    } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack! or winner"
      hasBlackJack = true 
    
    } else {
      message = "So sad! You're out of the game! "
      isAlive = false   //now man out of the game means isAlive=false.....
    } 
    //1. display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message

    //2. display the sum in the sumEl using sumEl.textContent...
    sumEl.textContent = "Sum: " + sum

    //3. display both the cards and text avaiable in the paragraph........
    //cardsEl.textContent = "Cards: " + " " + firstCart + " " + secondCard

    //display the value of Cards in the form of Array................
    //cardsEl.textContent = "Cards: " + " " + cards[0] + " " + cards[1]  //entering card untill out of game..
    
    cardsEl.textContent = "Cards: " 
    //display the value of Cards by using loop in Array...............
      for (let i=0; i<cards.length; i++) {
        
        cardsEl.textContent += cards[i] + " "
        
      } 
   
  }

    //2. take new card, add its value to sum when newCard function is clicked......
function newCard() {

    // to solve the problem of newCard trigger.....
    // Only allow the player to get a new card if she isAlive and does Not have blackjack
    
    if( isAlive === true && hasBlackJack === false) {
      //isAlive = true means man in the game (12,17,21) above 21 out of game && 
      //hasBlackJack = false; means !=21 (12,17,19,20)

      // console.log("Drawing a new Card from the random number ");    to show the data in the console....
      // console.log(thirdCard)

      //add a new card value from (2-12).....
      let thirdCard = getRandomCard()   //let thirdCard = 5; before calling the getRandomCard(2, 12)

      sum = sum + thirdCard   //add the thirdCard into sum....

      //calling the renderGame function to add Sum and check the condition too...
    

      //show the thirdCard in this format " Cards: 5 7 10 ".....
      //cardsEl.textContent = "Cards: " + " " + firstCart + " " + secondCard + " " + thirdCard;

      //push or add a new card in an array that is thirdCard......
    
      cards.push(thirdCard)     //adding value into cards array by using the function push()....
      renderGame();            //it will again call and added thirdCard value also print in screen with previous......
    
      //cardsEl.textContent = "Cards: " + cards[0]+ " " + cards[1]+ " " + cards[2]
    
     //when we use for loop in renderGame function then calling of function will be after pushing of the thirdCard....

    }

  }
    
    // How can we avoid to hard-code card values? means if we add double click on button next value add into sum as a 4th card......
    // we can also assign a random value through function to all the cards........
    
    function getRandomCard() {         //passing both the values........

     //formula to generate the random number and its limit. random value generated by computer between 0-1 always change the value like that 0.125,  0.33308, 0.74466 
  
     return Math.floor( Math.random() * (12 - 2) + 2 );  //this is the formula to getRandom between the max-min....
    }

// Problem: (solution in line No: 90)
// our new card feature is broken because it's entering more than one card (huge Problem)....
// yaha pr do problems hain ak k NEW CARD ak card ki bajaay more cards enter kr raha hai.....
// aor dusra ya k START GAME sa phle enter krne pr NEW CARD card enter kr raha hai...........
// We have to put logical AND operator to avoid this kind of problem.....
//Only trigger newCard() if you're allowed to.....

//  Object sneak peek....(almost done with the Blackjack Game)....
//  object data_type to assign two different data_type values.....
// let playerObject= {
//   name: "maaz: ", 
//   amount: 143
// }
//   playerEl.textContent = playerObject.name + "$"+ playerObject.amount;












//what is the logic of the cards check later.......
// if sum of card < 21 (no try no sad)....
// else if sum of two cards =20 (happy mood)....
// else sum of two cards > 21 (out of the game)....