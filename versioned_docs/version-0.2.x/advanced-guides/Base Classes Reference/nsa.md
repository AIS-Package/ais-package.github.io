---
sidebar_position: 1
title: Negative Selection Base
sidebar_label: Negative Selection
lastUpdatedAt: 2025/04/04
author: João Paulo
---

# ``class BaseNSA(BaseClassifier, ABC)``

The ``BaseNSA`` class contains utility functions with the ``protected`` modifier that can be inherited by various classes for ease of use. It includes functions for distance calculation, data separation to improve training and prediction efficiency, accuracy measurement and other functions.

---

## Protected Functions:

---

### Function _check_and_raise_exceptions_fit(...):
```python
def _check_and_raise_exceptions_fit(
    X: npt.NDArray = None,
    y: npt.NDArray = None,
    _class_: Literal["RNSA", "BNSA"] = "RNSA",
) -> None:
```
Function responsible for verifying fit function parameters and throwing exceptions if the verification is not successful.

**Parameters**:
* ***X*** (``npt.NDArray``): Training array, containing the samples and their characteristics, [``N samples`` (rows)][``N features`` (columns)].
* ***y*** (``npt.NDArray``): Array of target classes of ``X`` with [``N samples`` (lines)].
* ***_class_*** (Literal[RNSA, BNSA], optional): Current class. Defaults to 'RNSA'.

**Raises**
* ``TypeError``: If X or y are not ndarrays or have incompatible shapes.
* ``ValueError``: If _class_ is BNSA and X contains values that are not composed only of 0 and 1.

---

### Function _check_and_raise_exceptions_predict(...):
```python
def _check_and_raise_exceptions_predict(
    X: npt.NDArray = None,
    expected: int = 0,
    _class_: Literal["RNSA", "BNSA"] = "RNSA",
) -> None:
```
Function responsible for verifying predict function parameters and throwing exceptions if the verification is not successful.

**Parameters**:
* ***X*** (``npt.NDArray``): Input array for prediction, containing the samples and their characteristics, [``N samples`` (rows)][``N features`` (columns)].
* ***expected*** (``int``): Expected number of features per sample (columns in X).
* _class_ (``Literal[RNSA, BNSA], optional``): Current class. Defaults to 'RNSA'.

**Raises**
* ``TypeError``: If X is not an ndarray or list.
* ``FeatureDimensionMismatch``: If the number of features in X does not match the expected number.
* ``ValueError``: If _class_ is BNSA and X contains values that are not composed only of 0 and 1.