(function(){
	var app = angular.module('store',[]); //mandar hablar a angular
//prefijo directiva de angular y todo lo demas directiva externa 
var gem = {
	name:'Dodecahedron',
	price: 2.95,
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
	canPurchase: false,
	soldOut: true
//scope pegamento entre el controlador y la vista
	}

	var gems = [ 
	{
		name:'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		images: [
			{full: 'public/img/gem2.jpg',
			thumb: 'public/img/gem2.jpg'
		}
		],
		reviews: [
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'},
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'}
		]
	},
	{
		name:'Ruby',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		images: [
			{full: 'public/img/gem1.jpg',
			thumb: 'public/img/gem1.jpg'
		}
		],
		reviews: [
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'},
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'}
		]
	},
	{
		name:'Safiro',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		images: [
			{full: 'public/img/gem3.jpg',
			thumb: 'public/img/gem3.jpg'
		}
		],
		reviews: [
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'},
			{stars: 5, body: 'I love this product', author: 'jose@hotmail.com'}
		]
		
	}

	];
	

	app.controller('StoreController', function(){
		this.products = gems;
	});//solo se manejara en el entorno de app

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab
		}

	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	})

})();


