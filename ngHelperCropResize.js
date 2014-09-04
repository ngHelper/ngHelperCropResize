'use strict';

/**
 * The module contains everything we need to handle the busy indicator logic
 */
var ngHelperCropResize = angular.module('ngHelperCropResize', []);

/**
 * @ngdoc directive
 * @name ngHelperDemoApp.directive:ngHelperCropResize
 * @description
 * # ngHelperCropResize
 */
ngHelperCropResize.directive('autoCropAndResize', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {

          // get the real source
          var realSource = $(element).attr('src');

          // set the default avatar
          $(element).attr('src', 'bower_components/ng-helper-crop-resize/assets/default.png');

          // set the realSource
          $(element).attr('realsrc', realSource);

          // resize and crop
          $(element).resizeAndCrop( { forceResize: true } );

      }
    };
  });
