import myCollection from "./collection.js";
import chalk from "chalk";

  //console.log(myCollection);
  //console.log(myCollection[0].name);
   

//let item;
function describeItem(item){
 //push(itemArr[item]);
 //console.log(itemArr.length);
 //for(let i=0; i< myCollection.length; i++){
//let i;
 
 if (item.count === 1){
     console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`);
      }
      else {
          console.log(`I have ${chalk.magenta(item.count)} ${chalk.cyan(item.name)}. Here's what I like about them: ${chalk.green(item.whatILike)}`);
      }
}
//}
//describeItem(myCollection[0]);

/*Task 2d*/

//creating function describeCollection which takes an array as parameter
let Arr = [];
function describeCollection(Arr){
//for(let item = 0; item < Arr.length; item++){

  Arr = Arr.forEach(describeItem);

}
describeCollection(myCollection);


