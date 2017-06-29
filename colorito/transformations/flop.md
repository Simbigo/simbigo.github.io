# Flop

Rotates an image the specified number of degrees. Empty triangles left over from rotating the image are filled with the background color. 

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flop;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->transform(new Flop());
$image->saveAs('flip_1.jpg');
````

![flip.jpg](/assets/resources/colorito/transformations/flip_flop_1b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flop_1.jpg)


Apply the effect to multiply layers:

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flop;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg');
$image->transform(new Flop());
$image->saveAs('flop_2.jpg');
```

![flip.jpg](/assets/resources/colorito/transformations/flip_flop_2b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flop_2.jpg)


Apply the effect to a single layer:

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Flop;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg')->transform(new Flop());
$image->saveAs('flop_3.jpg');
```

![flip.jpg](/assets/resources/colorito/transformations/flip_flop_3b.jpg)
![flip.jpg](/assets/resources/colorito/transformations/flop_3.jpg)
