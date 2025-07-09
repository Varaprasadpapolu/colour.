const colours =  [
    "red", "green", "blue", "rgba(133, 122, 200)","#f15025"];

    const btn = document.getElementById("btn");
    const colour = document.querySelector("colour");

btn.addEventListener("click", function()
{
    const randomNumber = getRandomNumber();
    // Math.floor(Math.random() * colours.length);
    // console.log(randomNumber);
    // console.log(colours[randomNumber]);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

 function getRandomNumber() {
    return Math.floor(Math.random()*colours.length);
 }
    
