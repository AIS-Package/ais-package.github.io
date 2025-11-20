---
sidebar_position: 2
title: Base class for classification algorithm.
sidebar_label: BaseClassifier
lastUpdatedAt: 2025/08/19
author: João Paulo
keywords:
  - Base Classifier
  - Classification
  - Abstract Base Class
  - BaseClassifier
  - Machine Learning
  - Supervised Learning
  - fit Method
  - predict Method
  - score Method
  - Model Evaluation
  - Accuracy
  - Python ML Classes
  - RNSA
  - BNSA
---

## ``class BaseClassifier(ABC, Base)``

Base class for classification algorithms, defining the abstract methods ``fit`` and ``predict``, and implementing the ``get_params`` method.

## Abstract methods

### def fit(...)

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

Fit the model to the training data.

Implementation:

- [RNSA](../../aisp-techniques/negative-selection/RNSA.md#Function-fit)
- [BNSA](../../aisp-techniques/negative-selection/BNSA.md#Function-fit)
- [AIRS](../../aisp-techniques/clonal-selection-algorithms/airs/#Function-fit)

### def predict(...)

```python
def predict(self, X) -> Optional[npt.NDArray]:
```

Performs label prediction for the given data.

Implementation:

- [RNSA](../../aisp-techniques/negative-selection/RNSA.md#Function-predict)
- [BNSA](../../aisp-techniques/negative-selection/BNSA.md#Function-predict)
- [AIRS](../../aisp-techniques/clonal-selection-algorithms/airs/#Function-predict)

---

## Methods

### def score(...)

```python
def score(self, X: npt.NDArray, y: list) -> float
```

Score function calculates forecast accuracy.

This function performs the prediction of X and checks how many elements are equal between vector y and y_predicted.
This function was added for compatibility with some scikit-learn functions.

**Parameters**:

- ***X***: ``np.ndarray``
    Feature set with shape (n_samples, n_features).
- ***y***: ``np.ndarray``
    True values with shape (n_samples,).

**Returns**:

- accuracy: ``float`` The accuracy of the model.

### Function _slice_index_list_by_class(...)

The function ``__slice_index_list_by_class(...)``, separates the indices of the lines according to the output class, to go through the sample array, only in the positions that the output is the class that is being trained:

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Returns a dictionary with the classes as key and the indices in ``X`` of the samples.
