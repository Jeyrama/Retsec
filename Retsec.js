/*
You and your friends want to play undercover agents. 
In order to exchange your secret messages, 
you've come up with the following system.

You take the word, cut it in half, and place the first half behind the latter. 
If the word has an uneven number of characters, you leave the middle at its previous place.
That way, you'll be able to exchange your messages in private.

Task:
  You're given a single word. 
  Your task is to swap the halves. 
  If the word has an uneven length, 
  leave the character in the middle at 
  that position and swap the chunks around it.

Examples:
  reverseByCenter("secret")  == "retsec" // no center character
  reverseByCenter("agent")   == "nteag"  // center character is "e"
*/


// Solution

function reverseByCenter(s){
  let halfStrLength = s.length/2;
  let firstHalf = s.substring(halfStrLength, s.length);
  let secondHalf = s.substring(0, halfStrLength);
  let middleChar = s.charAt(halfStrLength);
    
  if (s.length % 2 === 0) {
    return firstHalf + secondHalf; 
  } else {
      firstHalf = s.substring(halfStrLength + 1, s.length);
      return firstHalf + middleChar + secondHalf;
  }
}