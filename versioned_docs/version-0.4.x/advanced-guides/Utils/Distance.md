---
last_update:
  date: 2025/08/28
  author: João Paulo
---

# Distance

Utility functions for normalized distance between arrays with numba decorators.

## def hamming(...)

```python
def hamming(u: npt.NDArray, v: npt.NDArray) -> np.float64:
```

The function to calculate the normalized Hamming distance between two points.

$$\frac{(x_1 \neq y_1) + (x_2 \neq y_2) + \cdots + (x_n \neq y_n)}{n}$$

**Parameters:**

* u (``npt.NDArray``): Coordinates of the first point.
* v (``npt.NDArray``): Coordinates of the second point.

**Returns:**

* Distance (``float``) between the two points.

---

## def euclidean(...)

```python
def euclidean(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64]) -> np.float64:
```

Function to calculate the normalized Euclidean distance between two points.

$$\sqrt{(X_{1} - X_{1})^2 + (Y_{2} - Y_{2})^2 + \cdots + (Y_{n} - Y_{n})^2}$$

**Parameters:**

* u (``npt.NDArray``): Coordinates of the first point.
* v (``npt.NDArray``): Coordinates of the second point.

**Returns:**

* Distance (``float``) between the two points.

---

## def cityblock(...)

```python
def cityblock(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64]) -> np.float64:
```

Function to calculate the normalized Manhattan distance between two points.

$$\frac{(|X_{1} - X_{1}| + |Y_{2} - Y_{2}| + \cdots + |Y_{n} - Y_{n}|)}{n}$$

**Parameters:**

* u (``npt.NDArray``): Coordinates of the first point.
* v (``npt.NDArray``): Coordinates of the second point.

**Returns:**

* Distance (``float``) between the two points.

---

## def minkowski(...)

```python
def minkowski(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64], p: float = 2.0):
```

Function to calculate the normalized Minkowski distance between two points.

$$( |X_{1} - Y_{1}|^p + |X_{2} - Y_{2}|^p + \cdots + |X_{n} - Y_{n}|^p)^\frac{1}{p}$$

**Parameters:**

* u (``npt.NDArray``): Coordinates of the first point.
* v (``npt.NDArray``): Coordinates of the second point.
* p float: The p parameter defines the type of distance to be calculated:
  * p = 1: **Manhattan** distance — sum of absolute differences.
  * p = 2: **Euclidean** distance — sum of squared differences (square root).
  * p > 2: **Minkowski** distance with an increasing penalty as p increases.

**Returns:**

* Distance (``float``) between the two points.

---

## def compute_metric_distance(...)

```python
def compute_metric_distance(
    u: npt.NDArray[np.float64],
    v: npt.NDArray[np.float64],
    metric: int,
    p: np.float64 = 2.0
) -> np.float64:
```

Function to calculate the distance between two points by the chosen ``metric``.

**Parameters:**

* u (``npt.NDArray``): Coordinates of the first point.
* v (``npt.NDArray``): Coordinates of the second point.
* metric (``int``): Distance metric to be used. Available options: [0 (Euclidean), 1 (Manhattan), 2 (Minkowski)]
* p (``float``): Parameter for the Minkowski distance (used only if `metric` is "minkowski").

**Returns:**

* Distance (``double``) between the two points with the selected metric.

---

## def min_distance_to_class_vectors(...)

```python
def min_distance_to_class_vectors(
    x_class: npt.NDArray,
    vector_x: npt.NDArray,
    metric: int,
    p: float = 2.0
) -> float:
```

Calculates the minimum distance between an input vector and the vectors of a class.

**Parameters:**

* x_class (``npt.NDArray``): Array containing the class vectors to be compared with the input vector. Expected shape: (n_samples, n_features).
* vector_x (``npt.NDArray``): Vector to be compared with the class vectors. Expected shape: (n_features,).
* metric (``int``): Distance metric to be used. Available options: [0 (Euclidean), 1 (Manhattan), 2 (Minkowski)]
* p (``float``): Parameter for the Minkowski distance (used only if `metric` is "minkowski").

**Returns:**

* float: The minimum distance calculated between the input vector and the class vectors.
* Returns -1.0 if the input dimensions are incompatible.

---

## def get_metric_code(...)

```python
def get_metric_code(metric: str) -> int:
```

Returns the numeric code associated with a distance metric.

**Parameters:**

* metric (str): Name of the metric. Can be "euclidean", "manhattan", "minkowski" or "hamming".

**Raises**

* ``ValueError``: If the metric provided is not supported

**Returns:**

* ``int``: Numeric code corresponding to the metric.

---
