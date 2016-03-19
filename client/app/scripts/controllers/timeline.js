'use strict';

angular.module('clientApp')

.controller('TimelineCtrl', function ($scope) {

    $scope.now = Date.now();

    $scope.getClasses = function(event){
      if(event.data <= Date.now()){
        return "timeline-transparent"
      }else{
        return "";
      }
    };

    $scope.events = [

      {
        type:"examen",
        title:"Prise de sang",
        date:"1458021600000",
        conseils:"Emmener l'ordonnance",
        localisation:"",
        contact:"",
        icon_side:"left"
      },
      {
        type:"consultation",
        title:"Consultation Anesthésie",
        date:"1458464400000",
        conseils:"Emmener résultats prise de sang",
        localisation:"",
        contact:""
      },
      {
        type:"admin",
        title:"Préadmission",
        date:"1458468000000",
        conseils:"Emmener carte nationale d'identité et carte vitale",
        localisation:"",
        contact:"",
        icon_side:"left"
      },

      {
        type:"douche",
        title:"Douche",
        date:"1459364400000",
        conseils:"Douche savon standard",
        localisation:"",
        contact:""
      },
      {
        type:"repas",
        title:"A jeun",
        date:"1459396800000",
        conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
        localisation:"",
        contact:"",
        icon_side:"left"
      },
      {
        type:"douche",
        title:"Douche et shampoing à la Bétadine",
        date:"1459396800000",
        conseils:"Pas de tabac, pas d'alcool, pas de nourriture",
        localisation:"",
        contact:""
      },
      {
        type:"operation",
        title:"Admission dans le service",
        date:"1459411200000",
        conseils:"En vue de l'opération",
        localisation:"",
        contact:"",
        bigday:true
      },
      {
        type:"sortie",
        title:"Retour à domicile",
        date:"1459429200000",
        conseils:"",
        localisation:"",
        contact:""
      },
      {
        type:"consultation",
        title:"Consultation ophtalmogue pour contrôle",
        date:"1459494000000",
        conseils:"",
        localisation:"",
        contact:""
      },
      {
        type:"consultation",
        title:"Consultation ophtalmologue pour contrôle",
        date:"1462172400000",
        conseils:"",
        localisation:"",
        contact:""
      }

    ];
  }
);
