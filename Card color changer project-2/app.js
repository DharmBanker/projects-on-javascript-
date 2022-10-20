//this is a selector of a card colour 
let cardColor = document.querySelector('#card-color');


// button of the different colours 
let buttonRed = document.querySelector('#Red')
let buttonYello = document.querySelector('#Yellow')
let buttonBlue = document.querySelector('#Blue')
let buttonGreen = document.querySelector('#Green')


// card colour changer to red 
function ChangeToRed()
{
    cardColor.style.backgroundColor = 'red';
}
buttonRed.addEventListener('click',ChangeToRed);


// card colour changer to Yellow 
function ChangeToYello()
{
    cardColor.style.backgroundColor = 'yellow';
}
buttonYello.addEventListener('click',ChangeToYello);


// card colour changer to blue
function ChangeToBlue()
{
    cardColor.style.backgroundColor = 'blue';
}
buttonBlue.addEventListener('click',ChangeToBlue);


// card colour changer to Green
function ChangeToGreen()
{
    cardColor.style.backgroundColor = 'green';
}
buttonGreen.addEventListener('click',ChangeToGreen);