// JavaScript source code
//set up website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//setup animation here
let lightningStart = { "left": "290px" };
let lightningEnd = { "left": "900px" };
let options = { "duration": 800 };

let hitTheVillain = () => {
    let villainStart = {
        transform: 'rotate(0deg)',  //try 'scale(1)' instead of rotate(0deg)
        opacity: 100
    };
    let villainEnd = {
        transform: 'rotate(1000deg)',  //try 'scale(0)' instead of rotate(1000deg)
        opacity: 0
    };
    let options = { "duration": 1500 };
    villain.animate([villainStart, villainEnd], options);
}
//run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish = hitTheVillain;
