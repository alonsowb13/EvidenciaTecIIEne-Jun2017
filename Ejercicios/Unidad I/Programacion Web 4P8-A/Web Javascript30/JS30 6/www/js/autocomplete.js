<<<<<<< HEAD
const cities = [];

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(blob=>blob.json())
    .then(data=>cities.push(...data));

const inputSearch = document.querySelector('.search');
const inputSuggestion = document.querySelector('.suggestions');


inputSearch.addEventListener('change',displayMatches);
inputSearch.addEventListener('keyup',displayMatches);


function selectedElement(){
    console.log(this);
}


function findMatches(word,cities){
    return cities.filter(place=>{
        const regex = new RegExp(word,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches(){
    const matches = findMatches(this.value,cities);
    const html = matches.map(place=>{
        const regex = new RegExp(this.value,'gi');
        const city = place.city.replace(regex,`<span class="match">${this.value}</span>`);
        const state = place.state.replace(regex,`<span class="match">${this.value}</span>`);
    
        return `
            <li>
                <span class="name">${city},${state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;       
    }).join('');
    inputSuggestion.innerHTML=html;
=======
const cities = [];

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(blob=>blob.json())
    .then(data=>cities.push(...data));

const inputSearch = document.querySelector('.search');
const inputSuggestion = document.querySelector('.suggestions');


inputSearch.addEventListener('change',displayMatches);
inputSearch.addEventListener('keyup',displayMatches);


function selectedElement(){
    console.log(this);
}


function findMatches(word,cities){
    return cities.filter(place=>{
        const regex = new RegExp(word,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches(){
    const matches = findMatches(this.value,cities);
    const html = matches.map(place=>{
        const regex = new RegExp(this.value,'gi');
        const city = place.city.replace(regex,`<span class="match">${this.value}</span>`);
        const state = place.state.replace(regex,`<span class="match">${this.value}</span>`);
    
        return `
            <li>
                <span class="name">${city},${state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;       
    }).join('');
    inputSuggestion.innerHTML=html;
>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
}