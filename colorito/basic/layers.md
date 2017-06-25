# Layers

Each creation or modification operation makes on the Image object. This object is a collection in which each image is presented as a separate layer. At any time, you can apply modifiers and effects to both the individual layer and the image as a whole. When you save image all the layers will be composed in the order in which they were added to the canvas.

In the "Quick Start" section, you could see that we loaded the image using the ```Image::makeFromFile()``` method. If you look behind the scenes, it becomes clear that this method is only an shortcut, and the original image was loaded as the first layer of the Image object.


### Layer creation

There are several ways to add new layers to an image.

1. A clean layer with the specified dimensions will be created.

```php
<?php

use Simbigo\Colorito\Image\Image;

$image = new Image();
$image->createLayer(200, 200);
```

2. Create a layer from the image file.

```php
<?php

use Simbigo\Colorito\Image\Image;

$image = new Image();
$image->createLayerFromFile('path/to/file.jpg');
```

3. By creating a layer object yourself, you can add both a blank and a layer based on the image.

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Image\Layer;

$image = new Image();
$layer = new Layer();
$layer->loadFile('path/to/source.jpg');
$image->addLayer($layer);
```


### Access to layers

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Image\Layer;

$image = Image::makeFromFile('first.jpg');
$image->createLayerFromFile('second.jpg');


// getting the layers by index

$firstLayer = $image->getFirstLayer();
$secondLayer = $image->getLayer(1);
$lastLayer = $image->getLastLayer();


// control the number of layers

if (!$image->hasLayer(2)) {
    $thirdLayer = new Layer();
    $thirdLayer->loadFile('third.jpg');
    $image->addLayer($thirdLayer);
}

if ($image->countLayers() === 3) {
    echo 'OK';
}


// iterate
$layers = $image->getLayers();
foreach ($layers as $layer) {
    // some actions
}
```


### Editing

Below you can see examples of the transformation applied to different objects. In the first case, we rotate the entire image, and in the second only a separate layer.

![village.jpg](/assets/resources/colorito/village.jpg)
![tower.jpg](/assets/resources/colorito/tower.jpg)

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Rotation;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg');
$image->transform(new Rotation(90));
$image->saveAs('rotation_img.jpg');
```

![village.jpg](/assets/resources/colorito/basic/rotation_img.jpg)

```php
<?php

use Simbigo\Colorito\Image\Image;
use Simbigo\Colorito\Transform\Rotation;

$image = new Image();
$image->createLayerFromFile('village.jpg');
$image->createLayerFromFile('tower.jpg')->transform(new Rotation(90));
$image->saveAs('rotation_layer.jpg');
```

![village.jpg](/assets/resources/colorito/basic/rotation_layer.jpg)
