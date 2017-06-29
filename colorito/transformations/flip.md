# Flip

Creates a vertical mirror image by reflecting the pixels around the central x-axis.

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flip;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->transform(new Flip());
$image->saveAs('flip_1.jpg');
````

![flip.jpg](/assets/resources/colorito/transformations/flip_1b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flip_1.jpg)


Apply the effect to multiply layers:

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flip;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg');
$image->transform(new Flip());
$image->saveAs('flip_2.jpg');
```

![flip.jpg](/assets/resources/colorito/transformations/flip_2b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flip_2.jpg)


Apply the effect to a single layer:

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flip;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg')->transform(new Flip());
$image->saveAs('flip_3.jpg');
```

![flip.jpg](/assets/resources/colorito/transformations/flip_3b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flip_3.jpg)
