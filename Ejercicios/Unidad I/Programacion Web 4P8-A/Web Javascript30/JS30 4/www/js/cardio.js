<<<<<<< HEAD
const games = [
    {
        name: 'super metroid',
        year:1994,
        company:'nintendo'
    },
    {
        name: 'league of legends',
        year:2007,
        company:'rito'
    },
    {
        name: 'zelda link to the past',
        year:1993,
        company:'nintendo'
    },
    {
        name: 'zelda wind waker',
        year:2003,
        company:'nintendo'
    },
    {
        name: 'bioshock 1',
        year:2007,
        company:'2kgames'
    },
    {
        name: 'bioshock infinite',
        year:2010,
        company:'2kgames'
    }
];

/*Filter*/
const oldest = games.filter(game => game.year<=(2000));
console.table(oldest);

/*Map of company and name*/
const company_name = games.map(game=>`${game.company} ${game.name}`);
console.log(company_name);

/*Sort for name*/

const order_name = games.sort((a,b)=>a.name>b.name?1:-1);
console.table(order_name);


/*Sum up the company of the array*/
const company_total = games.reduce(function(obj,item){
 
    
    if(!obj[item.company]){
        obj[item.company] = 0;
    }
    obj[item.company]++;
    return obj;
    
},{});

console.log(company_total);

=======
const games = [
    {
        name: 'super metroid',
        year:1994,
        company:'nintendo'
    },
    {
        name: 'league of legends',
        year:2007,
        company:'rito'
    },
    {
        name: 'zelda link to the past',
        year:1993,
        company:'nintendo'
    },
    {
        name: 'zelda wind waker',
        year:2003,
        company:'nintendo'
    },
    {
        name: 'bioshock 1',
        year:2007,
        company:'2kgames'
    },
    {
        name: 'bioshock infinite',
        year:2010,
        company:'2kgames'
    }
];

/*Filter*/
const oldest = games.filter(game => game.year<=(2000));
console.table(oldest);

/*Map of company and name*/
const company_name = games.map(game=>`${game.company} ${game.name}`);
console.log(company_name);

/*Sort for name*/

const order_name = games.sort((a,b)=>a.name>b.name?1:-1);
console.table(order_name);


/*Sum up the company of the array*/
const company_total = games.reduce(function(obj,item){
 
    
    if(!obj[item.company]){
        obj[item.company] = 0;
    }
    obj[item.company]++;
    return obj;
    
},{});

console.log(company_total);

>>>>>>> e37c3d33ff3f6a6dff200d54fa43c169401c664a
