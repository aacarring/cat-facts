const generateBtn = document.querySelector('.generate button');
const factsSection = document.querySelector('.facts');
const placeholderGif = document.querySelector('.facts img');
const factDiv = document.querySelector('.facts .fact');

function generateFact() {
    //deletes gif to make space for fact text
    placeholderGif.remove();
    //clears factDiv from previous function call
    factDiv.innerText = "";
    fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => response.json())
        .then(data => {
            const factArr = data;
            let i = Math.floor(Math.random() * factArr.length);
            let factText = factArr[i].text;
            factDiv.innerText = factText;
        });
}

generateBtn.addEventListener("click", generateFact);