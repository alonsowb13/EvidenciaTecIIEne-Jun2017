<<<<<<< HEAD
const dogs = [
    {
        name:'Snickers',
        age:2
    },
    {
        name:'Hugo',
        age:8
    }
];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='50px';
}

console.log('%c Lorem ipsum','font-size:50px; background:red;');

console.warn('OH NOOO');

console.error('Rayos!');

console.info('Informacion');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'),'That is wrong!');

/*console.clear()*/

console.dir(p);

dogs.forEach(dog=>{
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog,name} is ${dog.age} years old`);
    console.log(`${dog,name} is ${dog.age*7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
console.count("OKs");
console.count("OKs");
console.count("Rito");
console.count("OKs");
console.count("Rito");
console.count("OKs");
console.count("Rito");
console.count("OKs");

console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
    .then(data=>data.json())
    .then(data=>{
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);
=======
const dogs = [
    {
        name:'Snickers',
        age:2
    },
    {
        name:'Hugo',
        age:8
    }
];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='50px';
}

console.log('%c Lorem ipsum','font-size:50px; background:red;');

console.warn('OH NOOO');

console.error('Rayos!');

console.info('Informacion');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'),'That is wrong!');

/*console.clear()*/

console.dir(p);

dogs.forEach(dog=>{
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog,name} is ${dog.age} years old`);
    console.log(`${dog,name} is ${dog.age*7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
console.count("OKs");
console.count("OKs");
console.count("Rito");
console.count("OKs");
console.count("Rito");
console.count("OKs");
console.count("Rito");
console.count("OKs");

console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
    .then(data=>data.json())
    .then(data=>{
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);
>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
