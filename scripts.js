let jokeArea =document.getElementById("jokes");
let btnNxt = document.getElementById("next");
btnNxt.addEventListener('click',nextJokes);

async function nextJokes(){
    let response = await fetch("https://icanhazdadjoke.com/slack");
    let result = await response.json();
    console.log(result);
    console.log(result.attachments[0].text);
    jokeArea.innerHTML=result.attachments[0].text;
}