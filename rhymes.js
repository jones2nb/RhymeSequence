// get relevant dom elements
const queryInputElem = document.getElementById('query');

const frigginForm = document.getElementById('vestigial');

frigginForm.addEventListener('submit', (event) => {
    console.log('submitting');
    event.preventDefault();
})

const results = document.getElementById('results');
let resultContainer = document.createElement('div');

// add event listener to know when to search

queryInputElem.addEventListener('keyup', async function (ev) {
    ev.preventDefault()
    if (ev.key == 'Enter') {
        console.log('pressed enter')

        const rhymeResultsResp = await fetch(
            `https://rhymebrain.com/talk?function=getRhymes&word=${queryInputElem.value}`);
        console.log(rhymeResultsResp);
        const rhymeResults = await rhymeResultsResp.json();

        //console.log(rhymeResults);

        var temp = [];
        for (let index = 0; index < 20; index++) {
            document.write(`<div style="font-size:${rhymeResults[index].freq}">${rhymeResults[index].word}</div>`)
        }

    }
});

// write function that searches the rhyme API given a (string) query (likely you should use the fetch API)

// write function that:
//  1. expects array of word object results
//    that look like the spec says https://rhymebrain.com/api.html#rhyme
//  2. creates DOM elements and inserts them into the page