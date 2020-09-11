---
title: 'The "Hello world" of neural networks'
date: '2020-10-09'
---

Defining a neural network with Keras. A neural network is a set of function which can learn patterns. 

```python
model = tf.keras.Sequential([keras.layers.Dense((units = 1, input_shape =[1])])
```
This nn has only one layer and one unit.

There are two math functions that help us with nn.

```python
model.compile(optimizer='sgd' , loss='mean_squared_error')
```

The neural network doesn´t know what is X and Y, it will guess results. The loss function measures how good or bad was the result of the neural network and the optimizer will use that value to obtain the next guess.

I will use this data set with NumPy library

```python
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
ys = np.array([-3.0, -1.0, 1.0, 3.0, 5.0, 7.0], dtype=float)

#it will train the model 500 times
model.fit(xs, ys, epoch(500))
# it will predict the result for the x value 10.0
print(model.predict([10.0]))
``` 

This will print a result close to 19.0 but not exactly 19 because neural networks work based on probability. 

This is the link for colab:
[colab](https://colab.research.google.com/github/lmoroney/dlaicourse/blob/master/Course%201%20-%20Part%202%20-%20Lesson%202%20-%20Notebook.ipynb#scrollTo=X9uIpOS2zx7k)

