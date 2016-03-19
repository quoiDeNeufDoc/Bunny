'use strict';

angular.module('clientApp')

.controller('TimelineCtrl', function ($scope) {

    $scope.events = [

      {
        type:"examen",
        title:"Prise de sang",
        date:"J-15",
        conseils:"Emmener l'ordonnance",
        localisation:"",
        contact:""
      },

      {
        type:"consultation",
        title:"Consultation Anesthésie",
        date:"J-10",
        conseils:"Emmener résultats prise de sang",
        localisation:"",
        contact:""
      },

      {
        type:"entree",
        title:"Préadmission",
        date:"J-1",
        conseils:"Emmener carte nationale d'identité et carte vitale",
        localisation:"",
        contact:""
      },

      {
        type:"douche",
        title:"Douche",
        date:"J-0",
        conseils:"Douche savon standard",
        localisation:"",
        contact:""
      },
      {
        type:"repas",
        title:"A jeun",
        date:"J-0 6H",
        conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
        localisation:"",
        contact:""
      },
      {
        type:"douche",
        title:"Douche et shampoing Bétadine",
        date:"J-0 10H",
        conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
        localisation:"",
        contact:""
      },
      {
        type:"operation",
        title:"Intervention cataracte",
        date:"J-0 15h",
        conseils:"",
        localisation:"",
        contact:""
      },
      {
        type:"sortie",
        title:"Sortie",
        date:"J-0 15H",
        conseils:"",
        localisation:"",
        contact:""
      },
      {
        type:"consultation",
        title:"Consultation ophtalmo controle",
        date:"J1 9H",
        conseils:"",
        localisation:"",
        contact:""
      },
      {
        type:"consultation",
        title:"Consultation ophtalmo decontrole",
        date:"J+30 9H",
        conseils:"",
        localisation:"",
        contact:""
      }

    ];
  }
);
