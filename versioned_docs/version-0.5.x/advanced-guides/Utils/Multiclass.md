---
sidebar_position: 1
title: Multiclass
sidebar_label: Multiclass
lastUpdatedAt: 2025/04/04
author: João Paulo
---

This file contains internal utility functions designed to simplify data manipulation and processing in multiclass classification scenarios within the AISP package.

## def slice_index_list_by_class(...)

```python
def slice_index_list_by_class(classes: Union[npt.NDArray, list], y: npt.NDArray) -> dict
```

The function ``slice_index_list_by_class(...)``, separates the indices of the lines \
according to the output class, to loop through the sample array, only in positions where \
the output is the class being trained.

**Parameters**:

* ***classes*** (``list or npt.NDArray``): list with unique classes.
* ***y*** (npt.NDArray): Receives a ``y``[``N sample``] array with the output classes of the ``X`` sample array.

**returns**:

* dict: A dictionary with the list of array positions(``y``), with the classes as key.

---

## def predict_knn_affinity(...)

```python
def predict_knn_affinity(
    X: npt.NDArray,
    k: int,
    all_cell_vectors: List[Tuple[Union[str, int], npt.NDArray]],
    affinity_func: Callable[[npt.NDArray, npt.NDArray], float]
) -> npt.NDArray
```

Function to predict classes using k-nearest neighbors and trained cells.

**Parameters:**

* ***X*** (`npt.NDArray`): Input data to be classified.
* ***k*** (`int`): Number of nearest neighbors to consider for prediction.
* ***all_cell_vectors*** (`List[Tuple[Union[str, int], npt.NDArray]]`): List of tuples containing (class_name, cell vector) pairs.
* ***affinity_func*** (`Callable[[npt.NDArray, npt.NDArray], float]`): Function that takes two vectors and returns an affinity value.

**Returns:**

* `npt.NDArray`: Array of predicted labels for each sample in X, based on the k nearest neighbors.
