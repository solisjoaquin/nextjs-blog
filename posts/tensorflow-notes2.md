---
title: 'Tensorflow course notes part2'
date: '2020-01-02'
---

In this note, I will explain a problem with computer vision using the "Fashion MNIST" dataset. This dataset contains 70000 images, each one is represented as a 28x28 array of greyscales, of different clothes and their labels: [0] = T-shirt/top, [1]: Trouser, etc. 
This [link](https://github.com/zalandoresearch/fashion-mnist) has more information about the dataset.

The first step is to import the dataset: 

```python
import tensorflow as tf
from tensorflow import keras
```
A good technique of deep learning is separate the dataset in two parts, one for training and the other for the test. 

```python
fashion_mnist = keras.datasets.fashion_mnist
(train_images, train_labels),(test_images, test_labels) = fashion_mnist.load_data()
```
Let's look at one image of the dataset with the Matplotlib library

```python
import numpy as np
np.set_printoptions(linewidth=200)
import matplotlib.pyplot as plt
plt.imshow(training_images[10])
print(training_labels[10])
print(training_images[10])
```


Now I will implement the model, but first I will normalize the data to work with values between 0 and 1, I mentioned before that image is represent by a grey scale between 0 and 255:

```python
training_images  = training_images / 255.0
test_images = test_images / 255.0
```
The model is:

```python
model = keras.Sequential([
	keras.layers.Flatten(input_shape=(28,28)),
	keras.layers.Dense(128, activation= tf.nn.relu),
	keras.layers.Dense(10, activation= tf.nn.softmax)
])
```

If you read the first note, I implemented a neural network of one layer. This model has three layers. The number 10 in the third layer indicates the number of labels. The shape of the first layers is 28 by 28 because our images are 28 by 28. The Flatten turns in our square into a simple linear array. 

The second layer also knows as a hidden layer, it is more difficult to explain but imagine that exists a rule that incorporates those values [748 = 28x28] of a piece of clothes into a label. This step for each image of the 70000 images. Don't worry about this step now, but it is how a neural network works.

Now, let's compile and fit the model:

```python
model.compile(optimizer = tf.optimizers.Adam(),
              loss = 'sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(training_images, training_labels, epochs=5)
```

The final step is to verify the accuracy of the model with the test set:

```python
model.evaluate(test_images, test_labels)
```

More info about this exercise: [colab](https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/Course%201%20-%20Part%204%20-%20Lesson%202%20-%20Notebook.ipynb#scrollTo=WnBGOrMiA1n5)

