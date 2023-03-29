const jokeContainer=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const quoteContainer=document.getElementById("quote");
const btn2=document.getElementById("btn-2");
const author=document.getElementById("auth");
const url2="https://dummyjson.com/quotes/random";

btn.addEventListener("click",()=>{
    fetch(url)
    .then((response)=>{return response.json()})
    .then((data)=>{jokeContainer.innerText=data.joke;})
});

btn2.addEventListener("click",()=>{
    fetch(url2)
    .then((response)=>{return response.json()})
    .then((data)=>{
        quoteContainer.innerText=data.quote;
        author.innerText=data.author;
    })
});