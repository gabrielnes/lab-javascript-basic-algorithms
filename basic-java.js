//Iteration 1: Names and Input

let hacker1 = 'Simba';
let hacker2 = 'Mufasa';

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

console.log("\n");
//Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length +  " characters.");
} else if (hacker2.length > hacker1.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
} else if (hacker1.length == hacker2.length){
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters.");
}

console.log("\n");
//Iteration 3: Loops

let driver = '';
for (let i = 0; i < hacker1.length ; i++){
  driver += hacker1.toUpperCase()[i] + " ";
}
console.log(driver);

console.log(hacker2.split('').reverse().join(''));

if (hacker2.localeCompare(hacker1) > 0){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)){
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) == hacker2.localeCompare(hacker1)){
  console.log("What?! You both got the same name?")
}

console.log("\n");
//Bonus Time!

let paragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sem eu lorem bibendum accumsan sed et nulla. Sed ac libero elit. Etiam ultricies et justo vel luctus. Sed nec metus lorem. Sed ultrices orci a lorem iaculis, a accumsan odio pellentesque. Suspendisse placerat et ante sit amet aliquet. Integer id nunc felis. Nulla accumsan ipsum mi, vitae volutpat arcu auctor congue. Aliquam bibendum, erat eget faucibus vestibulum, massa est tincidunt est, vitae fringilla metus arcu ac augue. Donec ornare ante consectetur urna ultrices vestibulum. Donec tempor ullamcorper eros quis sollicitudin. Pellentesque ex odio, sollicitudin sed lacinia a, pharetra quis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus commodo viverra ante quis finibus. Proin non feugiat nunc. Nunc commodo pharetra magna, nec maximus neque. Ut accumsan est arcu, eget accumsan lectus commodo id. Aliquam nec rutrum lectus. Morbi feugiat dapibus lorem, vel iaculis erat fermentum at. Curabitur eu tortor a risus blandit feugiat. Mauris vulputate sem a massa commodo rhoncus. Praesent congue porttitor dolor, nec pulvinar nisi finibus vitae. Proin consectetur suscipit velit, vitae ornare nisi convallis vel. Ut vulputate interdum egestas. Aliquam quis neque at neque scelerisque lobortis lacinia ut nisi. Quisque fermentum placerat pellentesque. Fusce ac lectus rutrum, convallis magna id, suscipit eros. Ut lobortis dictum sem sed tempus. Donec pellentesque ligula a quam euismod sollicitudin. Sed eget felis pharetra, suscipit justo vitae, laoreet massa. Curabitur vel nunc vitae neque convallis aliquet at id urna. Curabitur massa massa, euismod ut imperdiet non, posuere in urna. Donec gravida, felis quis rutrum varius, neque arcu mollis quam, at faucibus massa mi eget sem. Morbi dignissim turpis nec iaculis rutrum. Etiam congue laoreet nunc sed sollicitudin.';

function wordCount(str){
  return str.split(" ").length;
}
console.log("There are " + wordCount(paragraphs) + " words.");

var et_count = paragraphs.match(/et/g).length;
console.log("The Latin word 'et' appears " + et_count + " times.");