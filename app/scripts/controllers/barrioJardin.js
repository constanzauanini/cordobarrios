'use strict';

/**
 * @ngdoc function
 * @name cordoBarrios5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cordoBarrios5App
 */
angular.module('cordoBarrios5App')
  .controller('BarrioJardinCtrl', function () {
var negocios=[ 

{ name:'Carnicería Sur',
                  image: 'images/carinceria.jpg',
                  description:'Encontra todos los cortes y la mejor calidad de carnes en Carniceria Cordoba. Ademas los mejores precios y la mejor ubicacion. Recibimos todos los medios de pago',
                  address: 'Cruz Roja 5000',
                  valoration: '80'  },


{ name:'Verduleria Kiko',
                  image: 'images/carinceria.jpg',
                  description:'Encontra las mejores verduras!. Ademas los mejores precios y la mejor ubicacion. Recibimos todos los medios de pago',
                  address: 'La entente 5000',
                  valoration: '70'  },

{ name:'Despensa Jardin',
                  image: 'images/kiosco.jpg',
                  description:'En despensa Jardin podras encontrar todo lo que buscas, todo tipo de bebidas, alimentos, articulos de limpieza y de higiene',
                  address: 'Richieri 222',
                  valoration: '30'
                },
                  { name:'Veterinaria Espionosa',
                  image: 'images/veterinaria.jpg',
                  description:'La mejor veterinaria !!! Tenemos todo tipo de alimentos, juguetes, accesorios para tu mascota',
                  address: 'Botafogo 100',
                  valoration: '10' },
                  
                  { name:'Despensa Angel',
                  image: 'images/kiosco.jpg',
                  description:'En despensa Angel podras encontrar todo lo que buscas, todo tipo de bebidas, alimentos, articulos de limpieza y de higiene',
                  address: 'Leopoldo Lugones 22',
                  valoration: '70'
                },
                  { name:'Guau Pet Shop',
                  image: 'images/veterinaria.jpg',
                  description:'La mejor veterinaria de Nueva Cordoba. Tenemos todo tipo de alimentos, juguetes, accesorios para tu mascota',
                  address: 'Estrada 221',
                  valoration: '70' },
                  { name:'Carnicería Córdoba',
                  image: 'images/carinceria.jpg',
                  description:'Encontra todos los cortes y la mejor calidad de carnes en Carniceria Cordoba. Ademas los mejores precios y la mejor ubicacion. Recibimos todos los medios de pago',
                  address: 'Transito Caceres 540',
                  valoration: '50'  }  ];
  	this.negocios = negocios;
  });
