# Fill

The Fill effect fills specified masks with a specified color.

#### __construct(Color $color, float $opacity = 1.0)
#### apply(Imagick $canvas)
#### getColor(): Color
#### getOpacity(): float
#### setColor(Color $color)
#### setOpacity(float $opacity)


**Example:**

```php
<?php

use Simbigo\Colorito\Color;
use Simbigo\Colorito\Effects\Generate\Fill;
use Simbigo\Colorito\Image\Image;

$fill = new Fill(new Color('orange'), 0.5);
Image::makeFromFile('village.jpg')->effect($fill)->saveAs('fill.jpg');
```

![village.jpg](/assets/resources/colorito/village.jpg)
![fill.jpg](/assets/resources/colorito/effects/fill.jpg)