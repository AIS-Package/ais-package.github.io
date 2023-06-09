---
sidebar_position: 1
title: aisp._base Class
sidebar_label: Class - Base.
lastUpdatedAt: 2023/06/04
author: João Paulo
---

# aisp._base Class

The ``_Base`` class contains utility functions with the ``protected`` modifier that can be inherited by various classes for ease of use. It includes functions for distance calculation, data separation to improve training and prediction efficiency, accuracy measurement and other functions.

## Protected Functions:

---

### def _distance(...):

```python
def _distance(self, u: npt.NDArray, v: npt.NDArray)
```

Function to calculate the distance between two points by the chosen ``metric``.

**Parameters**:
* ***u*** (``npt.NDArray``): Coordinates of the first point.
* ***v*** (``npt.NDArray``): Coordinates of the second point.

**returns**:
* Distance (``double``) between the two points.

---

### def _check_and_raise_exceptions_fit(...):
```python
def _check_and_raise_exceptions_fit(self, X: npt.NDArray = None, y: npt.NDArray = None, _class_: Literal['RNSA', 'BNSA'] = 'RNSA')
```
Function responsible for verifying fit function parameters and throwing exceptions if the verification is not successful.

**Parameters**:
* ***X*** (``npt.NDArray``): Training array, containing the samples and their characteristics, [``N samples`` (rows)][``N features`` (columns)].
* ***y*** (``npt.NDArray``): Array of target classes of ``X`` with [``N samples`` (lines)].
* ***_class_*** (Literal[RNSA, BNSA], optional): Current class. Defaults to 'RNSA'.

---

### def _slice_index_list_by_class(...)

```python
def _slice_index_list_by_class(self, y: npt.NDArray) -> dict
```

The function ``__slice_index_list_by_class(...)``, separates the indices of the lines according to the output class, to loop through the sample array, only in positions where the output is the class being trained.

**Parameters**:
* ***y*** (npt.NDArray): Receives a ``y``[``N sample``] array with the output classes of the ``X`` sample array.

**returns**:
* dict: A dictionary with the list of array positions(``y``), with the classes as key.

---

### def _score(...)

```python
def _score(self, X: npt.NDArray, y: list) -> float
```
Score function calculates forecast accuracy.

This function performs the prediction of X and checks how many elements are equal between vector y and y_predicted. 
This function was added for compatibility with some scikit-learn functions.

**Parameters**:
+ ***X***: np.ndarray
    Feature set with shape (n_samples, n_features).
+ ***y***: np.ndarray
    True values with shape (n_samples,).

**Returns**:

+ accuracy: float
    The accuracy of the model.