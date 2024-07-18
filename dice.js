// alert("hello js")

let img1=document.querySelectorAll("img")[0]
let img2=document.querySelectorAll("img")[1]

let result=document.querySelector("h1");

// Math=random(), floor, round
let randomNumber1=Math.floor(Math.random()  * 6 ) + 1;
let randomNumber2=Math.floor(Math.random()  * 6 ) + 1;

let imagePath1="image/dice" + randomNumber1 + ".png";
let imagePath2="image/dice" + randomNumber2 + ".png";

img1.setAttribute("src", imagePath1);
img2.setAttribute("src", imagePath2);


if(randomNumber1 > randomNumber2){
    result.innerHTML="Player one wins "
}

else if(randomNumber1 < randomNumber2){
    result.innerHTML="Player two wins "

}
else{
    result.innerHTML="A draw game "

}






