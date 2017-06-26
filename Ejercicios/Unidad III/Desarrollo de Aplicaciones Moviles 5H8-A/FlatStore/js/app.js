(function (){
	var app= angular.module('store',[]);

	var gem = {
		name:'dodecahedro',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
		canPurchase: false,
		soldOut: true
	}

	var gems = [
	{
		name:'Dodecahedro',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
		image:[
		{
			full: 'public/img/inuyasha1.jpg',
			thumb: 'public/img/inuyasha.jpg'
		}
		],
		reviews: [
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'},
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'}
		]
	},
	{
		name:'Ruby',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
		image:[
		{
			full: 'public/img/inuyasha.jpg',
			thumb: 'public/img/inuyasha2.jpg'
		}
		],
		reviews: [
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'},
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'}
		]
	},
	{
		name:'Safiro',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet',
		image:[
		{
			full: 'public/img/inuyasha2.jpg',
			thumb: 'public/img/inuyasha1.jpg'
		}
		],
		reviews: [
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'},
		{stars: 5, body:'I Love this product',author:'maria.s.j@gmal'}
		]
	}]

	app.controller('StoreController', function(){
		this.products=gems;
	});
	/*app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected=function(checkTab){
			return this.tab === checkTab
		};
	});*/

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview=function(product){
			product.reviews.push(this.review);
			
		}
	});

	app.directive('productTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/product-title.html'
		}
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl:'templates/product-panels.html',
			controller:function(){
				this.tab = 1;

				this.selectTab = function(setTab){
				this.tab = setTab;
				};

				this.isSelected=function(checkTab){
				return this.tab === checkTab
				};
			},
			controllerAs:'panel'
		}
	});



}) ();