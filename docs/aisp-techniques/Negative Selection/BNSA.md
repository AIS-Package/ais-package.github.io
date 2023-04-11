---
id: bnsa
title: BNSA
sidebar_label: BNSA - Binary Negative Selection Algorithm
sidebar_position: 2
---

# BNSA (Binary Negative Selection Algorithm)

## Constructor RNSA:

The ``BNSA`` (Binary Negative Selection Algorithm) class has the purpose of classifying and identifying anomalies through the self and not self methods.

``` python
 BNSA(self, N: int = 100, t: float = 0.1, max_discards: int = 100, seed: int = None):
```

**Attributes:**

* *N* (``int``): Number of detectors. Defaults to ``100``.
* *t* (``float``): The variable represents the percentage of dissimilarity between the T cell and the own samples. The default value is 10% (0.1), while a value of 1.0 represents 100% dissimilarity.
:::note
Setting the difference percentage too high can result in the inability to generate detectors for non-self.
:::

* *max_discards* (``int``): This parameter indicates the maximum number of detector discards in sequence, which aims to avoid a
possible infinite loop if a radius is defined that it is not possible to generate non-self detectors. Defaults to ``100``.
* *seed* (``int``): Seed for the random generation of values in the detectors. Defaults to ``None``.


**Other variables initiated:**

* *detectors* (``dict``): This variable stores a list of detectors by class.

* *classes* (``npt.NDArray``): list of output classes.



### Fuction fit(...)

The ``fit(...)`` function generates the detectors for non-fits with respect to the samples:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray):
```

In it, training is performed according to ``X`` and ``y``, using the negative selection method(``NegativeSelect``).

**The input parameters are:** 
* ``X``: array with the characteristics of the samples with **N** samples (rows) and **N** characteristics (columns). 

* ``y``: array with the output classes arranged in **N** samples that are related to ``X``.

* ``verbose``: boolean with default value ``True``, determines if the feedback from the detector generation will be printed.

*Returns the instance of the class.*

---

### Fuction predict(...)

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

### Function score(...):

The function ``score(...)`` calculates the accuracy of the trained model by making predictions and computing accuracy.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

It returns the accuracy as a float type.

---

## Private Methods

---

### Function __slice_index_list_by_class(...):

The function ``__slice_index_list_by_class(...)``, separates the indices of the lines according to the output class, to go through the sample array, only in the positions that the output is the class that is being trained:

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Returns a dictionary with the classes as key and the indices in ``X`` of the samples.

---