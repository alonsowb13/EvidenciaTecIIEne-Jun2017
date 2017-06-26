<<<<<<< HEAD
const people = [
    {name: 'Luis',year:1995},
    {name: 'Fer',year:2000},
    {name: 'Carlos',year:1998},
    {name: 'Alex',year:2001},
];

const comments = [
  { content: 'Love this!', id: 10 },
  { content: 'Super good', id: 20 },
  { content: 'You are the best', id: 30 },
  { content: 'Ramen is my fav food ever', id: 40 },
  { content: 'Nice Nice Nice!', id: 50 }
];

const someAdult = people.some(person=>((new Date().getFullYear())-person.year>=19));


console.log('alguien mayor de edad? ',someAdult);


const allAdult = people.every(person=>((new Date().getFullYear())-person.year>=19));

console.log('todos son mayor de edad? ',allAdult);

const comment = comments.find(comment=>comment.content==='Love this!');

console.log('Comentario:',comment.content,' id: ',comment.id);

const index = comments.findIndex(comment=>comment.content==='Love this!');

console.log('index',index);

const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];
console.log('Old Array');
console.table(comments);
console.log('New Array');
console.table(newComments);

=======
const people = [
    {name: 'Luis',year:1995},
    {name: 'Fer',year:2000},
    {name: 'Carlos',year:1998},
    {name: 'Alex',year:2001},
];

const comments = [
  { content: 'Love this!', id: 10 },
  { content: 'Super good', id: 20 },
  { content: 'You are the best', id: 30 },
  { content: 'Ramen is my fav food ever', id: 40 },
  { content: 'Nice Nice Nice!', id: 50 }
];

const someAdult = people.some(person=>((new Date().getFullYear())-person.year>=19));


console.log('alguien mayor de edad? ',someAdult);


const allAdult = people.every(person=>((new Date().getFullYear())-person.year>=19));

console.log('todos son mayor de edad? ',allAdult);

const comment = comments.find(comment=>comment.content==='Love this!');

console.log('Comentario:',comment.content,' id: ',comment.id);

const index = comments.findIndex(comment=>comment.content==='Love this!');

console.log('index',index);

const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];
console.log('Old Array');
console.table(comments);
console.log('New Array');
console.table(newComments);

>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
