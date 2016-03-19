'use strict';

angular.module('clientApp')

.controller('TimelineCtrl', function ($scope) {

    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      when: '11 hours ago via Twitter',
      content: 'Some awesome content.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Second heading',
      when: '12 hours ago via Twitter',
      content: 'More awesome content.'
    }, {
      badgeClass: 'default',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Third heading',
      titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
      contentHtml: "Hello how are you",
      footerContentHtml: '<a href="">Continue Reading</a>'
    }];
  }
);
