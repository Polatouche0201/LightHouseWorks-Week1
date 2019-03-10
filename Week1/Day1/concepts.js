/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

function joinList(list)
{
  var joinString = "";
  if(list.length > 0){
    for(var i = 0; i < list.length; i ++){
      joinString += list[i];
      if(i < list.length - 1)
        joinString += ", ";
    }
  }
  return joinString
}

console.log("Today I learned about " + concepts + ".");

