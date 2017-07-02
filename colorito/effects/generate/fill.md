# Fill

The Fill effect fills specified masks with a specified color.

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