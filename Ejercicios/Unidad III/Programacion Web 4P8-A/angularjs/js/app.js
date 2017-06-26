(function(){
	var app = angular.module('store', []);
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem1.png',
                    tumb:'public/img/gem1.png'
                }
            ]
        },
        {
            name: 'Zirconium',
            price: 3.95,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem2.png',
                    tumb:'public/img/gem2.png'
                }
            ]
        },
        {
            name: 'Hexagonal Gem',
            price: 4.95,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem3.png',
                    tumb:'public/img/gem3.png'
                }
            ]
        },
        {
            name: 'Ruby',
            price: 5.80,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem4.png',
                    tumb:'public/img/gem4.png'
                }
            ]
        },      
        {
            name: 'Amatista',
            price: 4.60,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem5.png',
                    tumb:'public/img/gem5.png'
                }
            ]
        },
        {
            name: 'Rose',
            price: 3.50,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem6.png',
                    tumb:'public/img/gem6.png'
                }
            ]
        },
        
        {
            name: 'Blue Zircon',
            price: 2.80,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem7.png',
                    tumb:'public/img/gem7.png'
                }
            ]
        },
        {
            name: 'Pink Diamond',
            price: 8.98,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem8.png',
                    tumb:'public/img/gem8.png'
                }
            ]
        },
        {
            name: 'Blue Diamond',
            price: 9.50,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem9.png',
                    tumb:'public/img/gem9.png'
                }
            ]
        },
        {
            name: 'Yellow Diamond',
            price: 10.35,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem10.png',
                    tumb:'public/img/gem10.png'
                }
            ]
        },
        {
            name: 'White Diamond',
            price: 10.56,
            description: 'Quis quo consequat eu summis, do quem deserunt non senserit legam arbitror o quo lorem legam ut cernantur, cupidatat illum se probant praetermissum eu se ab duis voluptate ita minim occaecat est praetermissum in de minim exercitation. Est',
            canPurchase: false,
            soldOut: false,
            images:[
                {
                    full:'public/img/gem11.png',
                    tumb:'public/img/gem11.png'
                }
            ]
        }
    ]
	app.controller('StoreController', function(){
        this.products = gems;
        

	});
	})();


