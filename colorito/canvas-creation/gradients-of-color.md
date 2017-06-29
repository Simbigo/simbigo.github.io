# Gradients of color


As you saw above you can create canvases of solid colors easy enough. But sometimes you want something more interesting. And Colorito provides a number of special effects that will let you do this.

One of the most common ways to create a image is gradient. 

### Linear gradients.

```php
<?php

use Simbigo\Colorito\Effects\Generate\LinearGradient;
use Simbigo\Colorito\Image\Image;

$image = new Image();
$layer = $image->createLayer(500, 100);
$layer->effect(new LinearGradient());
$image->saveAs('gradient_default.jpg');
```

![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_default.jpg)

As you can see by default LinearGradient will create an image with white at the top, and black at the bottom, and a smooth shading of grey across the height of the image.

But it does not have to be only a grey-scale gradient, you can also generate a gradient of different colors by either specifying one color, or both. 

```php
<?php

use Simbigo\Colorito\Color;
use Simbigo\Colorito\Effects\Generate\LinearGradient;
use Simbigo\Colorito\Image\Image;

$colors = [
    ['startColor' => new Color('blue'), 'endColor' => null],
    ['startColor' => new Color('yellow'), 'endColor' => null],
    ['startColor' => new Color('green'), 'endColor' => new Color('yellow')],
    ['startColor' => new Color('red'), 'endColor' => new Color('blue')],
    ['startColor' => new Color('tomato'), 'endColor' => new Color('steelblue')],
];

$gradient = new LinearGradient(new Color('white'), new Color('white'));
$image = new Image();
$image->createLayer(100, 100)->effect($gradient);
foreach ($colors as $color) {
    $gradient->setStartColor($color['startColor']);
    $gradient->setEndColor($color['endColor']);

    $image->saveAs('gradient_' . $color['startColor']->getValue() . '.jpg');
}
```

![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_blue-white.jpg)
![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_yellow-black.jpg)
![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_green-yellow.jpg)
![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_red-blue.jpg)
![gradient_default.jpg](/assets/resources/colorito/canvas-creation/gradient_tomato-steelblue.jpg)


### Radial gradients.

You can also generate radial gradient images in a similar way. 

```php
<?php

use Simbigo\Colorito\Color;
use Simbigo\Colorito\Effects\Generate\RadialGradient;
use Simbigo\Colorito\Image\Image;

$gradient = new RadialGradient(new Color('white'), new Color('black'));

$image = new Image();
$image->createLayer(100, 100)->effect($gradient);
$image->saveAs('radial_gradient_default.jpg');
```

![gradient_default.jpg](/assets/resources/colorito/canvas-creation/radial_gradient_default.jpg)