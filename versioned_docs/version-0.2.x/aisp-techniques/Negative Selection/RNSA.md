---
id: rnsa
title: RNSA
sidebar_label: RNSA - Real-Valued Negative Selection Algorithm
sidebar_position: 1
keywords:
  - Real-Valued
  - classifying
  - anomalies
  - not self
  - V-detector
  - Negative Selection Algorithm
  - Artificial Immune System (AIS)
  - Self and non-self
  - Immune
  - Computação Natural
last_update:
  date: 2025/05/17
  author: João Paulo
---

# RNSA (Real-Valued Negative Selection Algorithm)

## Constructor RNSA:

The ``RNSA`` (Real-Valued Negative Selection Algorithm) class has the purpose of classifying and identifying anomalies through the self and not self methods.

```python
class RNSA(
    self,
    N: int = 100,
    r: float = 0.05,
    r_s: float = 0.0001,
    k: int = 1,
    metric: Literal["manhattan", "minkowski", "euclidean"] = "euclidean",
    max_discards: int = 1000,
    seed: int = None,
    algorithm: Literal["default-NSA", "V-detector"] = "default-NSA",
    **kwargs: Dict[str, Union[bool, str, float]],
)
```

**Attributes:**

* *N* (``int``): Number of detectors. Defaults to ``100``.
* *r* (``float``): Radius of the detector. Defaults to ``0.05``.
:::note
it is important to consider that setting a very low radius for the detector can significantly reduce the detection rate. On the other hand, a very large radius can make it impossible to incorporate the detector into the search space, which can also compromise detection performance. It is essential to find a balance between the radius size and detection efficiency to achieve the best possible results.
:::

* *k* (``int``): Number of neighbors near the randomly generated detectors to perform the distance average calculation. Defaults to ``1``.
* *metric* (``str``): Way to calculate the distance between the detector and the sample:

    * ``'Euclidean'`` ➜ The calculation of the distance is given by the expression: $$\sqrt{(X_{1} – X_{1})^2 + (Y_{2} – Y_{2})^2 + ... + (Y_{n} – Y_{n})^2}$$.

    * ``'minkowski'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – Y_{1}|^p + |X_{2} – Y_{2}|^p + ... |X_{n} – Y_{n}|^p)^\frac{1}{p}$$.
    * ``'manhattan'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – X_{1}| + |Y_{2} – Y_{2}| + ... + |Y_{n} – Y_{n}|)$$.

    Defaults to ``'euclidean'``.


* *max_discards* (``int``): This parameter indicates the maximum number of consecutive detector discards, aimed at preventing a possible infinite loop in case a radius is defined that cannot generate non-self detectors. Defaults to ``1000``.
* *seed* (``int``): Seed for the random generation of values in the detectors. Defaults to ``None``.

* *algorithm* (``str``), Set the algorithm version:

    * ``'default-NSA'``: Default algorithm with fixed radius.
    * ``'V-detector'``: This algorithm is based on the article "[Real-Valued Negative Selection Algorithm with Variable-Sized Detectors](https://doi.org/10.1007/978-3-540-24854-5_30)", by Ji, Z., Dasgupta, D. (2004), and uses a variable radius for anomaly detection in feature spaces.

    Defaults to ``'default-NSA'``.

* *r_s* (``float``): rₛ Radius of the ``X`` own samples.
- ``**kwargs``:
    - *non_self_label* (``str``): This variable stores the label that will be assigned when the data has only one 
    output class, and the sample is classified as not belonging to that class. Defaults to ``'non-self'``.
    -  *cell_bounds* (``bool``): If set to ``True``, this option limits the generation of detectors to the space within the plane between 0 and 1. This means that any detector whose radius exceeds this limit is discarded, this variable is only used in the ``V-detector`` algorithm.
    - p (``float``): This parameter stores the value of ``p`` used in the Minkowski distance. The default is ``2``, which represents normalized Euclidean distance. Different values of p lead to different variants of the Minkowski 
    distance [learn more](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).
       

**Other variables initiated:**

* *detectors* (``dict``): This variable stores a list of detectors by class.

* *classes* (``npt.NDArray``): list of output classes.

---

### Function fit(...)

The ``fit(...)`` function generates the detectors for non-fits with respect to the samples:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

In it, training is performed according to ``X`` and ``y``, using the negative selection method(``NegativeSelect``).

The input parameters are: 
* ``X``: array with the characteristics of the samples with **N** samples (rows) and **N** characteristics (columns). 

* ``y``: array with the output classes arranged in **N** samples that are related to ``X``.

* ``verbose``: boolean with default value ``True``, determines if the feedback from the detector generation will be printed.

*Returns the instance of the class.*

---

### Function predict(...)

The ``predict(...)`` function performs class prediction using the generated detectors:

```python
def predict(self, X: npt.NDArray) -> npt.NDArray:
```

**The input parameter is:** 
* ``X``: array with the characteristics for the prediction, with **N** samples (Rows) and **N** columns.

**Returns:** 
* ``C``: prediction array, with the output classes for the given characteristics.
* ``None``: if there are no detectors.

---

### Function score(...)

The function ``score(...)`` calculates the accuracy of the trained model by making predictions and computing accuracy.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

It returns the accuracy as a float type.

---

## Private Methods

---

### Function __checks_valid_detector(...)

The ``def __checks_valid_detector(...)`` function checks if the detector has a valid ``r`` radius for the non-self of the class:

```python
def __checks_valid_detector(self, X: npt.NDArray, vector_x: npt.NDArray, samplesIndexClass: npt.NDArray) -> bool:
```

**The input parameters are:**
* ``X``: array with sample characteristics with **N** samples (rows) and **N** characteristics (columns), normalized to values between [0, 1].

* ``vector_x``: Randomly generated candidate detector.

* ``samplesIndexClass``: Array with the indexes of a class.
 
**Returns:** ``True`` for detectors that do not have samples inside or ``False`` if they do.

---

### Function __compare_KnearestNeighbors_List(...)

The ``def __compare_KnearestNeighbors_List(...)`` function compares the distance of the k-nearest neighbors, so if the distance of the new sample is smaller, replaces ``k-1`` and sorts in ascending order:

```python
def __compare_KnearestNeighbors_List(self, knn: npt.NDArray, distance: float) -> npt.NDArray:
```

Returns a list of k-nearest neighbor distances.

---

### Function __compare_sample_to_detectors(...)

Function to compare a sample with the detectors, verifying if the sample is proper.
In this function, when there is class ambiguity, it returns the class that has the greatest average distance between the detectors.

```python
def __compare_sample_to_detectors(self, line):
```
**The input parameters are:**
* line: vector with N-features
 
**Returns:** The predicted class with the detectors or None if the sample does not qualify for any class.

---

### Function __detector_is_valid_to_Vdetector(...)

Check if the distance between the detector and the samples, minus the radius of the samples, is greater than the minimum radius.

```python
def __detector_is_valid_to_Vdetector(self, distance, vector_x):
```
 
**The input parameters are:**

* distance (``float``): minimum distance calculated between all samples.
* vector_x (``numpy.ndarray``): randomly generated candidate detector vector x with values between 0 and 1.

**Returns:** 
* ``False``: if the calculated radius is smaller than the minimum distance or exceeds the edge of the space, if this option is enabled.
* ``True`` and the distance minus the radius of the samples, if the radius is valid.`

---

### Function __distance(...)

The function ``def __distance(...)`` calculates the distance between two points using the technique defined in ``metric``, which are: ``'euclidean', 'norm_euclidean', or 'manhattan'``

```python
def __distance(self, u: npt.NDArray, v: npt.NDArray):
```

The input parameters are ``u`` and ``v`` NDArrays, with the coordinates for the points.

**Returns:** the distance (``double``) between the two points.

---

