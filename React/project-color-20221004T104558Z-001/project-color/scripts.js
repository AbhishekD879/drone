const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//global object --> Window

//console.log(window.getComputedStyle(red).backgroundColor);

//This will write RGB values on browser console

//normally we write css -> background-color: #fff

//but in computed style it gets chabged to backgroundColor

//be careful in specifying the property

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(red));
// console.log(getBGColor(cyan));

//event listener

var elementColor = getBGColor(cyan);

cyan.addEventListener("click", () => {
  center.style.background = elementColor;
});

//need to pass which element to listen and the element's color
const magicColorChanger = (elementChosen, colorToBeChanged) => {
  return elementChosen.addEventListener("mouseenter", () => {
    center.style.background = colorToBeChanged;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
