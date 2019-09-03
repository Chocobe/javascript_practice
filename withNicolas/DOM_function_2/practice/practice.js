const myTitle = document.getElementById("myContent");
console.log(document);
console.dir(document);

console.log(myTitle);
console.dir(myTitle);

myTitle.style.color = "magenta";


document.title = "Hello World";


const queryTitle = document.querySelector("#myContent");
queryTitle.innerHTML = "Don't give up !";