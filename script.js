// variables
const getBtn = document.getElementById('magic_btn');
const displayArea = document.querySelector('.output');
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

//functions
function displayDadJoke(joke) {
    let output = `<span>"${joke}"</span>`;
    displayArea.innerHTML = output;
}

async function getDadJokes() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", requestOptions);
        const data = await response.json();
        const joke = data.joke;
        displayDadJoke(joke);
    } catch (err) {
        console.log(err);
    }

}

//eventlisteners
getBtn.addEventListener('click', getDadJokes);
