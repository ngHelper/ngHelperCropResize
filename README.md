ngHelperCropResize
==================

A simple directive to adjust your images without loosing quality

### Install ng-helper-qr-code
```
bower install ng-helper-crop-resize --save
```

### Include the angular module
```javascript
angular.module('appApp', [
    'ngHelperCropResize'
]);
```

### Resize & crop your image
```html
<img src="images/avatardemo.jpg" style="width: 150px; height: 150px;" class="autoCropAndResize">
```

### Remarks
The directive is also good for many images which are loaded relativly slow. During the time an image will be loaded and processed the component is an avatar image. Don't forget to add the following thing in your gruntfile:

```javascript
{
  expand: true,
  cwd: '.',
  src: 'bower_components/ng-helper-crop-resize/assets/*',
  dest: '<%= yeoman.dist %>'
}
```

## History

### Version 0.0.1

* initial release

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

## Contributors

* [Traakr/resizeAndCrop](https://github.com/Traackr/resizeAndCrop)

## License

[MIT License](https://github.com/lukehaas/css-loaders/blob/step2/LICENSE)
