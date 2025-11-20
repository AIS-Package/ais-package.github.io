---
id: cell
title: Memory B-cell
sidebar_label: Cell - Memory B-cell
sidebar_position: 2
pagination_next: null
keywords:
  - Binary
  - classifying
  - affinity threshold
  - Real-Valued
  - classifying
  - anomalies
  - K-Nearest Neighbors
  - memory B-cell
lastUpdatedAt: 2025/05/25
author: João Paulo
---

Representa uma célula-B de memória.

### Constructor

Parameters:

* **vector** (``Optional[npt.NDArray]``): A feature vector of the cell. Defaults to None.

---

### Function hyper_clonal_mutate(...)

Parameters:

* **n** (``int``): The number of clones to be generated from mutations in the original cell.
* **feature_type** (``Literal["continuous-features", "binary-features", "ranged-features"]``): Specifies the type of
algorithm to use based on the nature of the input features
* **bounds** (``np.ndarray``): Array (n_features, 2) with min and max per dimension.

```python
def hyper_clonal_mutate(
    self,
    n: int,
    feature_type: Literal[
        "binary-features",
        "continuous-features",
        "ranged-features"
    ],
    bounds: Optional[npt.NDArray[np.float64]] = None
) -> npt.NDArray
```

Returns an array containing N mutated vectors from the original cell.
