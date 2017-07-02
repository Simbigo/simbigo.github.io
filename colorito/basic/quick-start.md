# Quick start

### Load images

The simple way to load a image is call static method ```makeFromFile()```:

```php
<?php

use Simbigo\Colorito\Image\Image;

$image = Image::makeFromFile('path/to/source.jpg');
```

### Conversion of format

If you want change format of the source image, just save it with necessary extension:

```php
<?php

use Simbigo\Colorito\Image\Image;

$image = Image::makeFromFile('path/to/source.jpg');
$image->saveAs('path/to/result.png');
````

### Blank images

You can also create a blank image:

```php
<?php

use Simbigo\Colorito\Image\Image;

$image = new Image();
$image->saveEmptyAs(500, 120, 'blank.png');
```

![blank.png](/assets/resources/colorito/basic/blank.png)

