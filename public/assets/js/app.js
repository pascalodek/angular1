(function(){

	var app = angular.module('store',[ ]);

	app.controller('StoreController', function(){
		this.products =  gems ;

	});

	var gems =[
	 {
		name: 'Dodecahedron',
		price: 3.99,
		description: '...',
		canPurchase: true,
		soldOut:true,
		images:[
		{
			full:'assets/img/gem1.png',
			thumb:'assets/img/gem1.png',

		}],
	},
	{
		name: 'Pentagonal gem',
		price:88.67,
		description: 'dededede',
		canPurchase: true,
		soldOut:false,
		images:[
		{
			full:'assets/img/gem2.png',
			thumb:'assets/img/gem2.png',

		}],
	}
	];
}) ();

