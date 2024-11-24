
async function getRandomDogImage() {
    const url = "https://random.dog/woof.json";
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('dogImage').src = data.url;
}

async function getRandomCatImage() {
    const url = "https://cataas.com/cat?" + Math.random() * 1000;
    document.getElementById('catImage').src = url;
}

async function getRandomPersonImage() {
    const url = "https://thispersondoesnotexist.com/";
    document.getElementById('personImage').src = url;
}

async function getRandomQuote() {
    const url = "https://api.kanye.rest/";
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('kanyeQuote').innerText = data.quote;
}

setInterval(getRandomDogImage, 2000);
setInterval(getRandomCatImage, 2000);
setInterval(getRandomPersonImage, 2000);
setInterval(getRandomQuote, 2000);

window.onload = () => {
    getRandomDogImage();
    getRandomCatImage();
    getRandomPersonImage();
    getRandomQuote();
}
