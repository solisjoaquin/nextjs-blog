---
title: 'Tensorflow notes course part3'
date: '2020-01-01'
---

A little introduction to convolution would be like implementing a filter to our pixels matrix. That will change the values of our image. One example of this is pooling. 

## Pooling

Image that you have an array of 8x8:

```python
[0, 64, 128, 128
48, 192, 144, 144
142, 226, 168, 0
225, 0, 0, 64]
```
Now take a matrix of 4x4 starting for the first square:


```python
[0, 64, 
48, 192]
```

Choose the biggest value: 192. 

Repeat this process with the rest of the 3 squares. You will get these values: 144, 225, 168.

The new matrix will be:

```python
[192, 144
225, 168]
```
This technique will preserve the features of the original matrix. 




model = tf.keras.models.Sequential([
	tf.keras.layers.Flatten(),
	tf.keras.layers.Dense(128, activation=tf.nn.relu),
	tf.keras.layers.Dense(10, activation=tf.nn.softmax)
])



model = tf.keras.models.Sequential([
	
	tf.keras.layers.Conv2D(64,(3,3), activation='relu'
				input_shape= (28,28,1)),
	tf.keras.layers.MaxPooling2D(2,2),
	tf.keras.layers.Conv2D(64, (3,3), activation='relu'),
	tf.keras.layers.MaxPooling2D(2,2),
	tf.keras.layers.Flatten(),
	tf.keras.layers.Dense(128, activation=tf.nn.relu),
	tf.keras.layers.Dense(10, activation=tf.nn.softmax)
])

The first part will implement the first convolution
generating 64 filters for us, the filter is 3 by 3, the activation
is relu, and the input shape is the same that the last neural network
the number 1 will indicate a single byte for the color depth. 

The next step is implement a maxpooling, it will take the maximum vlaue
with a array of 2by2.

The next step is implement a new convolution and a new maxpooling