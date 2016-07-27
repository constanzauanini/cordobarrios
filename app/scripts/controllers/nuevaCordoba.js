'use strict';

/**
 * @ngdoc function
 * @name cordoBarrios5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cordoBarrios5App
 */
angular.module('cordoBarrios5App')
  .controller('NuevaCordobaCtrl', function () {
var negocios=[ { name:'Despensa Angel',
                  image: 'images/kiosco.jpg',
                  description:'En despensa Angel podras encontrar todo lo que buscas, todo tipo de bebidas, alimentos, articulos de limpieza y de higiene',
                  address: 'Leopoldo Lugones 22',
                  valoration: '60'
                },
                  { name:'Guau Pet Shop',
                  image: 'images/veterinaria.jpg',
                  description:'La mejor veterinaria de Nueva Cordoba. Tenemos todo tipo de alimentos, juguetes, accesorios para tu mascota',
                  address: 'Estrada 221',
                  valoration: '40' },
                  { name:'Carnicería Córdoba',
                  image: 'images/carinceria.jpg',
                  description:'Encontra todos los cortes y la mejor calidad de carnes en Carniceria Cordoba. Ademas los mejores precios y la mejor ubicacion. Recibimos todos los medios de pago',
                  address: 'Transito Caceres 540',
                  valoration: '90'  },
                  { name:'Despensa Angel',
                  image: 'images/kiosco.jpg',
                  description:'En despensa Angel podras encontrar todo lo que buscas, todo tipo de bebidas, alimentos, articulos de limpieza y de higiene',
                  address: 'Leopoldo Lugones 22',
                  valoration: '60'
                },
                  { name:'Guau Pet Shop',
                  image: 'images/veterinaria.jpg',
                  description:'La mejor veterinaria de Nueva Cordoba. Tenemos todo tipo de alimentos, juguetes, accesorios para tu mascota',
                  address: 'Estrada 221',
                  valoration: '40' },
                  { name:'Carnicería Córdoba',
                  image: 'images/carinceria.jpg',
                  description:'Encontra todos los cortes y la mejor calidad de carnes en Carniceria Cordoba. Ademas los mejores precios y la mejor ubicacion. Recibimos todos los medios de pago',
                  address: 'Transito Caceres 540',
                  valoration: '90'  }  ];
  	this.negocios = negocios;
  });
