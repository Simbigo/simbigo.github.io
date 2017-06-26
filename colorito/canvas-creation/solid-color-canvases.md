# Solid color canvases

When you create a image you are getting Image object. It doesn't have some layers. If you don't have a plan to save an empty image, you need to create a new layer and to make all manipulations with it. See "Layers" section for more information. 

**A. Using Image::setBackground() method.**

```php
<?php

use Simbigo\Colorito\Color\Color;
use Simbigo\Colorito\Image\Image;

$image = new Image();
$image->setBackground(new Color('lightgreen'));
$image->createLayer(500, 50);
$image->saveAs('solid_green.jpg');
```

![solid.jpg](/assets/colorito/canvas-creation/solid_green.jpg)

**B. Set background on create the layer.**

```php
<?php

use Simbigo\Colorito\Color\Color;
use Simbigo\Colorito\Image\Image;

$image = new Image();
$image->createLayer(500, 50, new Color('lightblue'));
$image->saveAs('solid_blue.jpg');
```

![solid.jpg](/assets/colorito/canvas-creation/solid_blue.jpg)

**C. Use Fill effect.**

```php
<?php

use Simbigo\Colorito\Color;
use Simbigo\Colorito\Effects\Generate\Fill;
use Simbigo\Colorito\Image\Image;

$fill = new Fill(new Color('gold'));

$image = new Image();
$image->createLayer(500, 50)->effect($fill);
$image->saveAs('solid_gold.jpg');
```

![solid.jpg](/assets/colorito/canvas-creation/solid_gold.jpg)